import { envs } from "../../config";
import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { prismaClient } from "../../data/postgres/client-connection";
import { LoginUserDto, RegisterUserDto } from "../../domain/dtos/auth";
import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors/CustomErrors";
import fs from "fs/promises";
import path from "path";
import { create } from "express-handlebars";
import { EmailService } from "./email.service";

export class AuthService {
  constructor(private readonly emailService: EmailService) {}

  public async loginUser(
    loginDto: LoginUserDto
  ): Promise<{ user: any; token: string }> {
    const user = await prismaClient.users.findFirst({
      where: { email: loginDto.email },
    });

    if (!user) throw CustomError.unauthorized("User not found");

    if (!bcryptAdapter.compare(loginDto.password, user.password))
      throw CustomError.unauthorized("Invalid email or password");

    const { password, ...userData } = await UserEntity.create(user);

    const token = JwtAdapter.generateToken({ id: user.id }, "24h");
    if (!token) throw new Error("Error generating token");

    return {
      user: userData,
      token,
    };
  }

  public async registerUser(
    registerDto: RegisterUserDto
  ): Promise<{ user: any; token: string }> {
    const existUser = await prismaClient.users.findFirst({
      where: { email: registerDto.email },
    });

    if (existUser) throw CustomError.unauthorized("User already exists");

    const data = { ...registerDto };
    data.password = bcryptAdapter.hash(data.password);

    const user = await prismaClient.users.create({ data });

    await this.sendEmailConfirmation(user.email);

    const { password, ...userEntity } = await UserEntity.create(user);

    const token = JwtAdapter.generateToken({ id: user.id }, "24h");
    if (!token) throw new Error("Error generating token");

    return { user: userEntity, token };
  }

  private async compileTemplate(
    templateName: string,
    data: object
  ): Promise<string> {
    const templatePath = path.join(
      __dirname,
      "..",
      "views",
      `${templateName}.hbs`
    );
    const templateSource = await fs.readFile(templatePath, "utf-8");
    const hbs = create({ extname: ".hbs" });
    const compiledTemplate = hbs.handlebars.compile(templateSource, {});
    return compiledTemplate(data);
  }

  private async sendEmailConfirmation(email: string): Promise<void> {
    const token = JwtAdapter.generateToken({ email });
    if (!token) throw new Error("Error generating token");

    const url = `${envs.app_url}/api/auth/validate-email/${token}`;
    const message = await this.compileTemplate("emailValidation", {
      validationUrl: url,
      email,
    });

    const isSent = await this.emailService.sendEmail({
      email,
      subject: "Validate your email",
      message,
    });
    if (!isSent) throw new Error("Error sending email");
  }

  public async validateEmail(token: string): Promise<void> {
    const payload = JwtAdapter.verifyToken(token);
    if (!payload) throw new Error("Invalid token");

    const { email } = payload as { email: string };
    if (!email) throw new Error("Email not in token");

    const user = await prismaClient.users.findFirst({ where: { email } });
    if (!user) throw CustomError.unauthorized("User not found");

    await prismaClient.users.update({
      data: { email_validated: true },
      where: { email },
    });
  }

  public async restorePassword(email: string): Promise<void> {
    // Verify the user exists
    const user = await prismaClient.users.findFirst({ where: { email } });
    if (!user) throw CustomError.notFound("User not found");

    // Generate token with email and short expiration (1 hour)
    const token = JwtAdapter.generateToken({ email }, "1h");
    if (!token) throw new Error("Error generating token");

    // Create reset password URL
    const url = `${envs.app_url}/api/auth/reset-password/${token}`;
    
    // Use the existing compileTemplate method for consistency
    const message = await this.compileTemplate("resetPassword", {
      resetUrl: url,
      email,
    });

    // Send email with reset link
    const isSent = await this.emailService.sendEmail({
      email,
      subject: "Reset Your Password",
      message,
    });
    
    if (!isSent) throw new Error("Error sending password reset email");
  }

  public async resetPassword(token: string, newPassword: string): Promise<void> {
    // Validate the token
    const payload = JwtAdapter.verifyToken(token);
    if (!payload) throw new Error("Invalid or expired token");

    const { email } = payload as { email: string };
    if (!email) throw new Error("Email not found in token");

    // Find the user
    const user = await prismaClient.users.findFirst({ where: { email } });
    if (!user) throw CustomError.notFound("User not found");

    // Validate password length
    if (newPassword.length < 6) {
      throw CustomError.badRequest("Password must be at least 6 characters");
    }

    // Hash the new password
    const hashedPassword = bcryptAdapter.hash(newPassword);

    // Update the password
    await prismaClient.users.update({
      data: { password: hashedPassword },
      where: { email },
    });
  }
}
