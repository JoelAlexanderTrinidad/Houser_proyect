const connection = require('../helpers/connection');
const modelos = require('../database/models')

module.exports = {
    crearUsuario: (req, res) => {

        const {nombre, passWord, email} = req.body;

        const nuevoUsuario = {
            nombre,
            passWord,
            email
        };
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