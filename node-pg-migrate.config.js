import dotenv from "dotenv";
dotenv.config(); // Carga automáticamente el archivo .env. Esto permite acceder a process.env.DATABASE_URL

export default {
  databaseUrl: process.env.DATABASE_URL, // Usa la URL de conexión a PostgreSQL desde .env
  migrationFolder: "./migrations", // Carpeta donde están tus archivos .sql
  sqlFile: true, //  Le dice que usamos archivos .sql y no .js
  ssl: true, //  Obligatorio para NeonDB

};

//Este archivo le dice a node-pg-migrate dónde encontrar las migraciones y cómo conectarse a NeonDB usando la variable DATABASE_URL que
// ya tenemos en .env.
