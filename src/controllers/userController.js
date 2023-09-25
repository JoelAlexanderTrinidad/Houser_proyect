const modelos = require('../database/models')

module.exports = {
  crearUsuario: async (req, res) => {
    try {

      const { name, password, email } = req.body;
      const nuevoUsuario = await modelos.Usuarios.create({
        name,
        password,
        email
      })

      if (nuevoUsuario) {
        return res.status(200).json({
          status: 200,
          mensaje: "Usuario creado con éxito",
        })
      }

    } catch (error) {
      console.log(error)
    }
  },

  updateUsuario: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, password, email } = req.body;

      const usuario = await modelos.Usuarios.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }

      usuario.name = name;
      usuario.password = password;
      usuario.email = email;

      await usuario.save();

      return res.status(200).json({
        status: 200,
        mensaje: "Usuario actualizado con éxito",
      });
    } catch (error) {
      console.log(error)
    }
  },
  deleteUsuario: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await modelos.Usuarios.findByPk(id);


      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }

      await modelos.Usuarios.destroy({
        where: {
          id: id
        }
      })
      return res.status(200).json({
        status: 200,
        mensaje: "Usuario actualizado con éxito",
      });

    } catch (error) {
      console.log(error)
    }
  }

}
