const modelos = require('../database/models')

module.exports = {
    crearUsuario: async (req, res) => {
      try {

        // captura lo que viene del body (lo que se envía con postman o un formulario en el front)
        const {name, password, email} = req.body;

        // se usa el método create de sequelize para crear uno nuevo
        // y se le pasa lo que vino por el body
        const nuevoUsuario = await modelos.Usuarios.create({
          name,
          password,
          email
        })

        // si el nuevo usuario existe que responda con un status 200 y un json con info
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
