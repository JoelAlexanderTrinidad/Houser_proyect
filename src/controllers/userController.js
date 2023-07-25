const connection = require('../helper/connection');

module.exports = {
    save: (usuario) => {
        guardarUsuario(usuario);
    }
}

function guardarUsuario(usuario) {
  
    const query = 'INSERT INTO Usuarios (name) VALUES (?)';
    const values = [ usuario.name ];
  
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error al insertar datos:', err);
      } else {
        console.log('Datos insertados exitosamente en la tabla usuarios:', result);
      }
    });
}