const mysql = require('mysql');

// Configuración de la base de datos
const dbConfig = {
    host: 'db4free.net',
    port: 3306,
    user: 'houser',
    password: 'houser123',
    database: 'houser'
  };

const connection = mysql.createConnection(dbConfig);

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa');
});

module.exports = connection;