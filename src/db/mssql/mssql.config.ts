import { ConnectionConfig } from 'mssql';
import * as dotenv from 'dotenv';
dotenv.config();

export const config: ConnectionConfig = {
  server: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT!),
  options: {
    encrypt: false,
    enableArithAbort: false, // Cambiar según sea necesario
    trustServerCertificate: false, // Desactiva la validación del certificado (NO RECOMENDADO en producción)
  },
};
