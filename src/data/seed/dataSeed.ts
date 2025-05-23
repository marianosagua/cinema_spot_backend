// dataSeed.ts - Datos de ejemplo para inicialización y pruebas de CinemaSpot Backend
//
// Este archivo exporta un objeto con datos de ejemplo (seed) para poblar la base de datos del sistema CinemaSpot.
// Es utilizado principalmente en scripts de seed para desarrollo, pruebas o despliegue inicial.
//
// Estructura del objeto exportado:
// - users: Lista de usuarios iniciales (nombre, email, contraseña, rol).
// - movies: Películas con detalles completos (título, descripción, categoría, duración, etc.).
// - rooms: Salas de cine disponibles.
// - categories: Categorías/genres de películas.
// - roles: Tipos de roles de usuario (ADMIN, USER).
// - showtimes: Funciones programadas (película, horario, sala).
// - seats: Asientos disponibles por sala.
// - futureReleases: Próximos estrenos con fecha futura.
// - actors: Actores disponibles para el reparto de películas.
// - movieCast: Relación película-actor para el reparto.
//
// Uso típico:
// import { dataSeed } from "../data/seed/dataSeed";
// await prismaClient.users.createMany({ data: dataSeed.users });
//
// Cada campo está diseñado para reflejar la estructura de la base de datos y facilitar la carga masiva de datos.
//
// Modifica este archivo para agregar, quitar o actualizar datos de ejemplo según las necesidades del proyecto.

export const dataSeed = {
  users: [
    {
      first_name: "James",
      last_name: "Smith",
      email: "ejemplo1@ejemplo1.com",
      password: "9999999",
      role: "ADMIN",
    },
    {
      first_name: "Emily",
      last_name: "Johnson",
      email: "ejemplo2@ejemplo2.com",
      password: "8888888",
      role: "ADMIN",
    },
  ],
  movies: [
    {
      title: "Interestelar",
      description:
        "Exploradores buscan un nuevo hogar para la humanidad más allá de las estrellas.",
      poster: "https://i.postimg.cc/WpYzW6Qt/interestellar-poster.jpg",
      category: 9,
      duration: "02:49:00",
      banner: "https://i.postimg.cc/KjPt7Jsz/Interstellar.jpg",
      synopsis:
        "Un viaje a través del tiempo y el espacio para salvar a la humanidad.",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      director: "Christopher Nolan",
      rating: "PG-13",
      review: 8.6,
    },
    {
      title: "El Caballero Oscuro",
      description:
        "Batman se enfrenta a su oponente más peligroso, el Joker. El reino de terror del Joker hace que Gotham descienda al caos.",
      poster: "https://i.postimg.cc/YqyrRrLF/the-dark-knight.jpg",
      category: 18,
      duration: "02:32:00",
      banner: "https://i.postimg.cc/fL6vf3zH/christian-bale-batsuit.jpg",
      synopsis:
        "Una historia apasionante sobre el bien contra el mal en el mundo de Gotham.",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      director: "Christopher Nolan",
      rating: "PG-13",
      review: 9.0,
    },
    {
      title: "Inception",
      description:
        "Un ladrón que roba secretos infiltrándose en el subconsciente de sus objetivos tiene la tarea de implantar una idea en la mente de alguien.",
      poster:
        "https://i.postimg.cc/ZnBd7BR9/MV5-BMj-Ax-Mz-Y3-Njcx-NF5-BMl5-Ban-Bn-Xk-Ft-ZTcw-NTI5-OTM0-Mw-V1.jpg",
      category: 9,
      duration: "02:28:00",
      banner:
        "https://i.postimg.cc/R0Y1v3HM/origen-inception-christopher-nolan-mutaciones-1.jpg",
      synopsis:
        "Un thriller complejo y alucinante sobre sueños dentro de sueños.",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      director: "Christopher Nolan",
      rating: "PG-13",
      review: 8.8,
    },
    {
      title: "Tiempos Violentos",
      description:
        "Una serie de historias interconectadas que involucran crimen, redención y destino en Los Ángeles.",
      poster: "https://i.postimg.cc/15pxnycP/pulp-fiction-poster.jpg",
      category: 18,
      duration: "02:34:00",
      banner: "https://i.postimg.cc/qB3wMGwW/pulp-1100x733.jpg",
      synopsis:
        "Un retrato intenso y estilizado del crimen y sus consecuencias en L.A.",
      trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
      director: "Quentin Tarantino",
      rating: "R",
      review: 8.9,
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Dos hombres encarcelados establecen un vínculo a lo largo de los años, encontrando consuelo y eventual redención a través de actos de decencia común.",
      poster:
        "https://i.postimg.cc/Y0R1ZGBM/the-shawshank-redeption-poster.jpg",
      category: 4,
      duration: "02:22:00",
      banner: "https://i.postimg.cc/vHwz16ST/image.jpg",
      synopsis: "Un relato de amistad y resiliencia frente a la adversidad.",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
      director: "Frank Darabont",
      rating: "R",
      review: 9.3,
    },
    {
      title: "El Padrino",
      description:
        "La historia de la poderosa y compleja familia Corleone, liderada por el patriarca Don Vito Corleone, mientras navegan por el mundo del crimen y la traición.",
      poster: "https://i.postimg.cc/GhN3SYB0/the-godfather-poster.png",
      category: 18,
      duration: "02:55:00",
      banner:
        "https://i.postimg.cc/HnX9ZpjT/HT-godfatrher-jef-170308-16x9-992.jpg",
      synopsis: "Una saga legendaria sobre poder, familia y crimen.",
      trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
      director: "Francis Ford Coppola",
      rating: "R",
      review: 9.2,
    },
    {
      title: "The Matrix",
      description:
        "Un hacker descubre la impactante verdad sobre la realidad, lo que lo lleva a formar parte de una revolución para liberar a la humanidad de una existencia simulada.",
      poster: "https://i.postimg.cc/ZRy7GLwZ/the-matrix-poster.jpg",
      category: 9,
      duration: "02:16:00",
      banner: "https://i.postimg.cc/dtR9GtzB/descarga.jpg",
      synopsis: "Una historia alucinante sobre la realidad y la simulación.",
      trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
      director: "Lana Wachowski",
      rating: "R",
      review: 8.7,
    },
    {
      title: "Forrest Gump",
      description:
        "La extraordinaria vida de un hombre sencillo de Alabama que inesperadamente influye en importantes eventos históricos.",
      poster: "https://i.postimg.cc/7LnjB9tR/forrest-gump-poster.jpg",
      category: 4,
      duration: "02:22:00",
      banner: "https://i.postimg.cc/pL2JCMvt/maxresdefault.jpg",
      synopsis:
        "Un relato conmovedor y humorístico de un hombre que sin saberlo cambia la historia.",
      trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      director: "Robert Zemeckis",
      rating: "PG-13",
      review: 8.8,
    },
    {
      title: "El Señor de los Anillos",
      description:
        "Un joven hobbit se embarca en una épica búsqueda para destruir el Anillo Único, con el destino de la Tierra Media pendiendo de un hilo.",
      poster:
        "https://i.postimg.cc/28hy91ws/dd24aedc7ba4fb38016329c1fb5cade7.jpg",
      category: 5,
      duration: "03:30:00",
      banner: "https://i.postimg.cc/k5GFrND1/hobbit-1-1659123079896.jpg",
      synopsis:
        "Un relato legendario del bien contra el mal ambientado en el mágico mundo de la Tierra Media.",
      trailer: "https://www.youtube.com/watch?v=PwiXeJfoR28",
      director: "Peter Jackson",
      rating: "PG-13",
      review: 8.9,
    },
    {
      title: "El Club de la Pelea",
      description:
        "Un trabajador de oficina con insomnio forma un club de lucha clandestino como forma de vínculo masculino y rechazo al consumismo.",
      poster:
        "https://i.postimg.cc/jqWLNgJd/MV5-BOTgy-OGQ1-NDIt-NGU3-Ny00-Mj-U3-LTg2-YWEt-Nm-Ey-Yj-Bi-Mj-I1-Y2-M5-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg",
      category: 18,
      duration: "02:19:00",
      banner:
        "https://i.postimg.cc/XYQcD1NB/fight-club-critica-echo-boomer.jpg",
      synopsis:
        "Una sátira cruda y oscura sobre el colapso de la sociedad moderna.",
      trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg",
      director: "David Fincher",
      rating: "R",
      review: 8.8,
    },
    {
      title: "Buenos Muchachos",
      description:
        "La historia real de un joven que asciende en las filas de la mafia, solo para caer víctima de la traición y la violencia.",
      poster: "https://i.postimg.cc/sgxtfFJ5/s-l400.jpg",
      category: 18,
      duration: "02:26:00",
      banner: "https://i.postimg.cc/D0kqbt6H/buenos-muchachos-3.jpg",
      synopsis:
        "Un relato apasionante y real sobre crimen, lealtad y traición.",
      trailer: "https://www.youtube.com/watch?v=qo5jJp4p8p4",
      director: "Martin Scorsese",
      rating: "R",
      review: 8.7,
    },
    {
      title: "El Silencio de los Inocentes",
      description:
        "Una joven agente del FBI busca la ayuda del asesino en serie caníbal encarcelado Hannibal Lecter para atrapar a otro asesino en serie suelto.",
      poster: "https://i.postimg.cc/Gmj2r66z/Josh-Beamish-Silence-Of-Lambs.jpg",
      category: 18,
      duration: "01:58:00",
      banner:
        "https://i.postimg.cc/MTj7HW71/tumblr-inline-o0ox4oi-APe1sl6jqt-500.jpg",
      synopsis:
        "Un escalofriante thriller psicológico sobre manipulación y juegos mentales.",
      trailer: "https://www.youtube.com/watch?v=W6Mm8Vco1pY",
      director: "Jonathan Demme",
      rating: "R",
      review: 8.6,
    },
  ],
  rooms: [{ name: "A1" }, { name: "B1" }, { name: "C1" }],
  categories: [
    { name: "Acción" },
    { name: "Aventura" },
    { name: "Comedia" },
    { name: "Drama" },
    { name: "Fantasía" },
    { name: "Terror" },
    { name: "Misterio" },
    { name: "Romance" },
    { name: "Ciencia Ficción" },
    { name: "Suspense" },
    { name: "Animación" },
    { name: "Documental" },
    { name: "Biografía" },
    { name: "Musical" },
    { name: "Histórica" },
    { name: "Guerra" },
    { name: "Western" },
    { name: "Crimen" },
    { name: "Familiar" },
    { name: "Deporte" },
  ],
  roles: [
    {
      id: 1,
      name: "ADMIN",
      description:
        "Usuario administrativo con acceso total al sistema, capaz de gestionar usuarios, configuraciones y otras operaciones críticas.",
    },
    {
      id: 2,
      name: "USER",
      description:
        "Usuario regular con acceso limitado a funciones y datos, típicamente para navegación general y uso de la aplicación.",
    },
  ],
  showtimes: [
    // Morning showtimes
    {
      movie: "Interestelar",
      start_time: "2024-05-01T10:00:00",
      end_time: "2024-05-01T12:49:00",
      room: "A1",
    },
    {
      movie: "El Caballero Oscuro",
      start_time: "2024-05-01T10:00:00",
      end_time: "2024-05-01T12:32:00",
      room: "B1",
    },
    {
      movie: "Inception",
      start_time: "2024-05-01T10:00:00",
      end_time: "2024-05-01T12:28:00",
      room: "C1",
    },

    // Afternoon showtimes
    {
      movie: "Tiempos Violentos",
      start_time: "2024-05-01T14:00:00",
      end_time: "2024-05-01T16:34:00",
      room: "A1",
    },
    {
      movie: "The Shawshank Redemption",
      start_time: "2024-05-01T14:00:00",
      end_time: "2024-05-01T16:22:00",
      room: "B1",
    },
    {
      movie: "El Padrino",
      start_time: "2024-05-01T14:00:00",
      end_time: "2024-05-01T16:55:00",
      room: "C1",
    },

    // Evening showtimes
    {
      movie: "The Matrix",
      start_time: "2024-05-01T19:00:00",
      end_time: "2024-05-01T21:16:00",
      room: "A1",
    },
    {
      movie: "Forrest Gump",
      start_time: "2024-05-01T19:00:00",
      end_time: "2024-05-01T21:22:00",
      room: "B1",
    },
    {
      movie: "El Señor de los Anillos",
      start_time: "2024-05-01T19:00:00",
      end_time: "2024-05-01T22:30:00",
      room: "C1",
    },

    // Next day showtimes
    {
      movie: "El Club de la Pelea",
      start_time: "2024-05-02T10:00:00",
      end_time: "2024-05-02T12:19:00",
      room: "A1",
    },
    {
      movie: "Buenos Muchachos",
      start_time: "2024-05-02T10:00:00",
      end_time: "2024-05-02T12:26:00",
      room: "B1",
    },
    {
      movie: "El Silencio de los Inocentes",
      start_time: "2024-05-02T10:00:00",
      end_time: "2024-05-02T11:58:00",
      room: "C1",
    },

    // Weekend showtimes
    {
      movie: "Interestelar",
      start_time: "2024-05-04T14:00:00",
      end_time: "2024-05-04T16:49:00",
      room: "A1",
    },
    {
      movie: "El Caballero Oscuro",
      start_time: "2024-05-04T14:00:00",
      end_time: "2024-05-04T16:32:00",
      room: "B1",
    },
    {
      movie: "Inception",
      start_time: "2024-05-04T19:00:00",
      end_time: "2024-05-04T21:28:00",
      room: "A1",
    },
    {
      movie: "Tiempos Violentos",
      start_time: "2024-05-04T19:00:00",
      end_time: "2024-05-04T21:34:00",
      room: "B1",
    },
    {
      movie: "The Shawshank Redemption",
      start_time: "2024-05-05T10:00:00",
      end_time: "2024-05-05T12:22:00",
      room: "A1",
    },
    {
      movie: "El Padrino",
      start_time: "2024-05-05T10:00:00",
      end_time: "2024-05-05T12:55:00",
      room: "B1",
    },
  ],
  seats: [
    { seat_number: 1, room: "A1", is_available: true },
    { seat_number: 2, room: "A1", is_available: true },
    { seat_number: 3, room: "A1", is_available: true },
    { seat_number: 4, room: "A1", is_available: true },
    { seat_number: 5, room: "A1", is_available: true },
    { seat_number: 6, room: "A1", is_available: true },
    { seat_number: 7, room: "A1", is_available: true },
    { seat_number: 8, room: "A1", is_available: true },
    { seat_number: 9, room: "A1", is_available: true },
    { seat_number: 10, room: "A1", is_available: true },

    { seat_number: 1, room: "B1", is_available: true },
    { seat_number: 2, room: "B1", is_available: true },
    { seat_number: 3, room: "B1", is_available: true },
    { seat_number: 4, room: "B1", is_available: true },
    { seat_number: 5, room: "B1", is_available: true },
    { seat_number: 6, room: "B1", is_available: true },
    { seat_number: 7, room: "B1", is_available: true },
    { seat_number: 8, room: "B1", is_available: true },
    { seat_number: 9, room: "B1", is_available: true },
    { seat_number: 10, room: "B1", is_available: true },

    { seat_number: 1, room: "C1", is_available: true },
    { seat_number: 2, room: "C1", is_available: true },
    { seat_number: 3, room: "C1", is_available: true },
    { seat_number: 4, room: "C1", is_available: true },
    { seat_number: 5, room: "C1", is_available: true },
    { seat_number: 6, room: "C1", is_available: true },
    { seat_number: 7, room: "C1", is_available: true },
    { seat_number: 8, room: "C1", is_available: true },
    { seat_number: 9, room: "C1", is_available: true },
    { seat_number: 10, room: "C1", is_available: true },
  ],
  futureReleases: [
    {
      title: "Capitán América: Nuevo Orden Mundial",
      description:
        "Sam Wilson asume el manto del Capitán América y enfrenta nuevos desafíos en un mundo cambiante.",
      poster: "https://i.postimg.cc/N0w5qx6q/Gb-Kdq-KWIAAc-T5q.jpg",
      category: 1,
      duration: "02:15:00",
      banner: "https://i.postimg.cc/FsWBBWQz/70425-h3.jpg",
      synopsis:
        "Sam Wilson, el nuevo Capitán América, debe descubrir una conspiración que amenaza la paz global.",
      trailer: "https://www.youtube.com/watch?v=trailer1",
      director: "Julius Onah",
      rating: "PG-13",
      release_date: "2025-05-03",
    },
    {
      title: "Mickey 17",
      description:
        "Un empleado prescindible en una misión de colonización humana se rebela contra su destino.",
      poster:
        "https://i.postimg.cc/13KfSqJ8/Captura-de-pantalla-2025-04-06-212653.png",
      category: 2,
      duration: "01:50:00",
      banner: "https://i.postimg.cc/zGycZCJj/Critica-Mickey-17-1-min.jpg",
      synopsis:
        "Mickey 17 descubre la verdad detrás de su misión y lucha por su supervivencia.",
      trailer: "https://www.youtube.com/watch?v=trailer2",
      director: "Bong Joon-ho",
      rating: "PG-13",
      release_date: "2025-06-15",
    },
    {
      title: "Jurassic World: Renacimiento",
      description:
        "La saga continúa con nuevas aventuras y desafíos en un mundo donde los dinosaurios coexisten con los humanos.",
      poster:
        "https://i.postimg.cc/mrNhbFjc/5ad4e35246f489894d0a59e7a0606b96.jpg",
      category: 1,
      duration: "02:10:00",
      banner: "https://i.postimg.cc/3xzbKkNH/202524174522-1.jpg",
      synopsis:
        "La convivencia entre humanos y dinosaurios llega a un punto crítico, desencadenando una nueva era de peligro.",
      trailer: "https://www.youtube.com/watch?v=trailer3",
      director: "Colin Trevorrow",
      rating: "PG-13",
      release_date: "2025-07-20",
    },
    {
      title: "Avatar: Fuego y Ceniza",
      description:
        "La continuación de la épica saga en Pandora, explorando nuevos territorios y culturas.",
      poster:
        "https://i.postimg.cc/LX95h6Qx/MV5-BYj-E0-OWZm-YWMt-Zj-Bh-Mi00-Yz-M5-LTkz-OTct-OTZh-MTIw-NDcx-Y2-U0-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
      category: 3,
      duration: "02:45:00",
      banner:
        "https://i.postimg.cc/q7nDgp66/1-setrockspires-180719-concept-smm-gondola-2191-v011f-3df188e5.jpg",
      synopsis:
        "Jake Sully y Neytiri enfrentan nuevas amenazas que ponen en peligro la armonía de Pandora.",
      trailer: "https://www.youtube.com/watch?v=trailer4",
      director: "James Cameron",
      rating: "PG-13",
      release_date: "2025-12-18",
    },
  ],
  actors: [
    {
      first_name: "Matthew",
      last_name: "McConaughey",
      age: 54,
      nationality: "Estadounidense",
    },
    {
      first_name: "Anne",
      last_name: "Hathaway",
      age: 41,
      nationality: "Estadounidense",
    },
    {
      first_name: "Jessica",
      last_name: "Chastain",
      age: 47,
      nationality: "Estadounidense",
    },
    {
      first_name: "Michael",
      last_name: "Caine",
      age: 91,
      nationality: "Británico",
    },
    {
      first_name: "Christian",
      last_name: "Bale",
      age: 50,
      nationality: "Británico",
    },
    {
      first_name: "Heath",
      last_name: "Ledger",
      age: 28,
      nationality: "Australiano",
    },
    {
      first_name: "Aaron",
      last_name: "Eckhart",
      age: 56,
      nationality: "Estadounidense",
    },
    {
      first_name: "Gary",
      last_name: "Oldman",
      age: 66,
      nationality: "Británico",
    },
    {
      first_name: "Leonardo",
      last_name: "DiCaprio",
      age: 49,
      nationality: "Estadounidense",
    },
    {
      first_name: "Joseph",
      last_name: "Gordon-Levitt",
      age: 43,
      nationality: "Estadounidense",
    },
    {
      first_name: "Ellen",
      last_name: "Page",
      age: 37,
      nationality: "Canadiense",
    },
    { first_name: "Tom", last_name: "Hardy", age: 46, nationality: "Británico" },
    {
      first_name: "John",
      last_name: "Travolta",
      age: 70,
      nationality: "Estadounidense",
    },
    {
      first_name: "Samuel L.",
      last_name: "Jackson",
      age: 75,
      nationality: "Estadounidense",
    },
    {
      first_name: "Uma",
      last_name: "Thurman",
      age: 54,
      nationality: "Estadounidense",
    },
    {
      first_name: "Bruce",
      last_name: "Willis",
      age: 69,
      nationality: "Estadounidense",
    },
    {
      first_name: "Tim",
      last_name: "Robbins",
      age: 65,
      nationality: "Estadounidense",
    },
    {
      first_name: "Morgan",
      last_name: "Freeman",
      age: 87,
      nationality: "Estadounidense",
    },
    {
      first_name: "Bob",
      last_name: "Gunton",
      age: 78,
      nationality: "Estadounidense",
    },
    {
      first_name: "William",
      last_name: "Sadler",
      age: 74,
      nationality: "Estadounidense",
    },
    {
      first_name: "Marlon",
      last_name: "Brando",
      age: 80,
      nationality: "Estadounidense",
    },
    { first_name: "Al", last_name: "Pacino", age: 84, nationality: "Estadounidense" },
    {
      first_name: "James",
      last_name: "Caan",
      age: 82,
      nationality: "Estadounidense",
    },
    {
      first_name: "Robert",
      last_name: "Duvall",
      age: 93,
      nationality: "Estadounidense",
    },
    {
      first_name: "Keanu",
      last_name: "Reeves",
      age: 59,
      nationality: "Canadiense",
    },
    {
      first_name: "Laurence",
      last_name: "Fishburne",
      age: 62,
      nationality: "Estadounidense",
    },
    {
      first_name: "Carrie-Anne",
      last_name: "Moss",
      age: 56,
      nationality: "Canadiense",
    },
    {
      first_name: "Hugo",
      last_name: "Weaving",
      age: 64,
      nationality: "Británico",
    },
    { first_name: "Tom", last_name: "Hanks", age: 67, nationality: "Estadounidense" },
    {
      first_name: "Robin",
      last_name: "Wright",
      age: 58,
      nationality: "Estadounidense",
    },
    {
      first_name: "Gary",
      last_name: "Sinise",
      age: 69,
      nationality: "Estadounidense",
    },
    {
      first_name: "Sally",
      last_name: "Field",
      age: 77,
      nationality: "Estadounidense",
    },
    {
      first_name: "Elijah",
      last_name: "Wood",
      age: 43,
      nationality: "Estadounidense",
    },
    {
      first_name: "Ian",
      last_name: "McKellen",
      age: 85,
      nationality: "Británico",
    },
    {
      first_name: "Viggo",
      last_name: "Mortensen",
      age: 65,
      nationality: "Estadounidense",
    },
    {
      first_name: "Orlando",
      last_name: "Bloom",
      age: 47,
      nationality: "Británico",
    },
    { first_name: "Brad", last_name: "Pitt", age: 60, nationality: "Estadounidense" },
    {
      first_name: "Edward",
      last_name: "Norton",
      age: 54,
      nationality: "Estadounidense",
    },
    {
      first_name: "Helena",
      last_name: "Bonham Carter",
      age: 58,
      nationality: "Británico",
    },
    {
      first_name: "Jared",
      last_name: "Leto",
      age: 52,
      nationality: "Estadounidense",
    },
    {
      first_name: "Robert",
      last_name: "De Niro",
      age: 80,
      nationality: "Estadounidense",
    },
    {
      first_name: "Ray",
      last_name: "Liotta",
      age: 67,
      nationality: "Estadounidense",
    },
    { first_name: "Joe", last_name: "Pesci", age: 81, nationality: "Estadounidense" },
    {
      first_name: "Lorraine",
      last_name: "Bracco",
      age: 69,
      nationality: "Estadounidense",
    },
    {
      first_name: "Jodie",
      last_name: "Foster",
      age: 61,
      nationality: "Estadounidense",
    },
    {
      first_name: "Anthony",
      last_name: "Hopkins",
      age: 86,
      nationality: "Británico",
    },
    {
      first_name: "Scott",
      last_name: "Glenn",
      age: 83,
      nationality: "Estadounidense",
    },
    {
      first_name: "Ted",
      last_name: "Levine",
      age: 67,
      nationality: "Estadounidense",
    },
  ],
  movieCast: [
    { movie: "Interestelar", actor: "Matthew McConaughey" },
    { movie: "Interestelar", actor: "Anne Hathaway" },
    { movie: "Interestelar", actor: "Jessica Chastain" },
    { movie: "Interestelar", actor: "Michael Caine" },

    { movie: "El Caballero Oscuro", actor: "Christian Bale" },
    { movie: "El Caballero Oscuro", actor: "Heath Ledger" },
    { movie: "El Caballero Oscuro", actor: "Aaron Eckhart" },
    { movie: "El Caballero Oscuro", actor: "Gary Oldman" },

    { movie: "Inception", actor: "Leonardo DiCaprio" },
    { movie: "Inception", actor: "Joseph Gordon-Levitt" },
    { movie: "Inception", actor: "Ellen Page" },
    { movie: "Inception", actor: "Tom Hardy" },

    { movie: "Tiempos Violentos", actor: "John Travolta" },
    { movie: "Tiempos Violentos", actor: "Samuel L. Jackson" },
    { movie: "Tiempos Violentos", actor: "Uma Thurman" },
    { movie: "Tiempos Violentos", actor: "Bruce Willis" },

    { movie: "The Shawshank Redemption", actor: "Tim Robbins" },
    { movie: "The Shawshank Redemption", actor: "Morgan Freeman" },
    { movie: "The Shawshank Redemption", actor: "Bob Gunton" },
    { movie: "The Shawshank Redemption", actor: "William Sadler" },

    { movie: "El Padrino", actor: "Marlon Brando" },
    { movie: "El Padrino", actor: "Al Pacino" },
    { movie: "El Padrino", actor: "James Caan" },
    { movie: "El Padrino", actor: "Robert Duvall" },

    { movie: "The Matrix", actor: "Keanu Reeves" },
    { movie: "The Matrix", actor: "Laurence Fishburne" },
    { movie: "The Matrix", actor: "Carrie-Anne Moss" },
    { movie: "The Matrix", actor: "Hugo Weaving" },

    { movie: "Forrest Gump", actor: "Tom Hanks" },
    { movie: "Forrest Gump", actor: "Robin Wright" },
    { movie: "Forrest Gump", actor: "Gary Sinise" },
    { movie: "Forrest Gump", actor: "Sally Field" },

    { movie: "El Señor de los Anillos", actor: "Elijah Wood" },
    { movie: "El Señor de los Anillos", actor: "Ian McKellen" },
    { movie: "El Señor de los Anillos", actor: "Viggo Mortensen" },
    { movie: "El Señor de los Anillos", actor: "Orlando Bloom" },

    { movie: "El Club de la Pelea", actor: "Brad Pitt" },
    { movie: "El Club de la Pelea", actor: "Edward Norton" },
    { movie: "El Club de la Pelea", actor: "Helena Bonham Carter" },
    { movie: "El Club de la Pelea", actor: "Jared Leto" },

    { movie: "Buenos Muchachos", actor: "Robert De Niro" },
    { movie: "Buenos Muchachos", actor: "Ray Liotta" },
    { movie: "Buenos Muchachos", actor: "Joe Pesci" },
    { movie: "Buenos Muchachos", actor: "Lorraine Bracco" },

    { movie: "El Silencio de los Inocentes", actor: "Jodie Foster" },
    { movie: "El Silencio de los Inocentes", actor: "Anthony Hopkins" },
    { movie: "El Silencio de los Inocentes", actor: "Scott Glenn" },
    { movie: "El Silencio de los Inocentes", actor: "Ted Levine" },
  ],
};
