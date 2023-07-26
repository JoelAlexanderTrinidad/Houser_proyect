// const connection = require('../helpers/connection');
const modelos = require('../database/models')

module.exports = {
    crearUsuario: async (req, res) => {
      try {
        const {name, password, email} = req.body;

        const nuevoUsuario = await modelos.Usuarios.create({
          name,
          password,
          email
        })

        if(nuevoUsuario){
          return res.status(200).json({
            status: 200,
            mensaje: "Usuario creado con éxito",
          })
        }

      } catch (error) {
        console.log(error)
      }
    }
}
