/* eslint-disable @typescript-eslint/no-var-requires */
// create-database.mjs

const dbConfig = require('../../knexfile');
const knex = require('knex');

// Asumiendo que estás usando un entorno de desarrollo como ejemplo
const dbName = dbConfig.connection.database;

// Crear una conexión sin especificar la base de datos, porque puede que aún no exista
const knexWithoutDb = knex({
  ...dbConfig,
  connection: {
    ...dbConfig.connection,
    port: parseInt(dbConfig.connection.port),
  },
});

knexWithoutDb
  .raw(`CREATE DATABASE IF NOT EXISTS ${dbName}`)
  .then(() => {
    console.log(`Base de datos '${dbName}' creada con éxito.`);
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error al crear la base de datos:', error);
    process.exit(1);
  })
  .finally(() => {
    knexWithoutDb.destroy();
  });
