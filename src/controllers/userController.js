const modelos = require('../database/models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  crearUsuario: async (req, res) => {
    try {

      const { nombre, password, email } = req.body;
      const nuevoUsuario = await modelos.Usuarios.create({
        name: nombre,
        password: bcryptjs.hashSync(password, 10),
        email,
        id_rol: 2
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
        mensaje: "Usuario eliminado con éxito",
      });

    } catch (error) {
      console.log(error)
    }
  },

  login: async (req, res) => {
    try {
      const { email } = req.body;
      let token = null;
      const usuario = await modelos.Usuarios.findOne({
        where: {
          email: email
        }
      });


      if(usuario){
        const privateKey = 'mykey';
        token = jwt.sign({user: usuario.email} ,privateKey ,{ expiresIn: '1h'});
        return res.json({
          usuario,
          token
        })
      }else{
        const responseJson = { error: 'No autorizado' };
        return res.status(401).json(responseJson);
      }

    } catch (error) {
      console.log(error);
    }
  },

  verifyToken: async (req, res, next) => {
    req.user = {user:null, verified:false};
    const bearerHeader = req.headers['Authorization'];
    console.log("bearerHeader", bearerHeader)
    if(typeof bearerHeader!=='undefined') {
      const privateKey = 'mykey';
      const bearerToken = bearerHeader.split(' ')[1];

      jwt.verify(bearerToken, privateKey, function (err,data){
        if(! (err && typeof data === 'undefined')) {
          req.user = {user: data.user, verified:true}
          next();
        }
      });
    }
  },
  
  logout: async (req, res) => {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(' ')[1];
      try {
        await blacklist.save(bearerToken); 

        return res.sendStatus(200);
      } catch (error) {
        console.error(error);
        return res.sendStatus(500); 
      }
    }
    return res.sendStatus(401);
  },


}
