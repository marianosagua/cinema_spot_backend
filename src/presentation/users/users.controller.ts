/**
 * Controlador de usuarios.
 * Gestiona la consulta, creación, actualización y eliminación de usuarios.
 * Utiliza UsersService para la lógica de negocio.
 *
 * Métodos:
 * - getUsers: Lista todos los usuarios.
 * - getUserById: Obtiene un usuario por ID.
 * - createUser: Crea un nuevo usuario.
 * - updateUser: Actualiza un usuario existente.
 * - deleteUser: Elimina un usuario por ID.
 */
import { handleError } from "../../domain/errors";
import { UsersService } from "./users.service";
import { Request, Response } from "express";

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  getUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.usersService.getUsers();
      res.json(users);
    } catch (error) {
      handleError(error, res);
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.usersService.getUserById(id);
      res.json(user);
    } catch (error) {
      handleError(error, res);
    }
  };

  createUser = async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const newUser = await this.usersService.createUser(userData);
      res.json(newUser);
    } catch (error) {
      handleError(error, res);
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await this.usersService.updateUser(id, userData);
      res.json(updatedUser);
    } catch (error) {
      handleError(error, res);
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.usersService.deleteUser(id);
      res.sendStatus(204);
    } catch (error) {
      handleError(error, res);
    }
  };
}
