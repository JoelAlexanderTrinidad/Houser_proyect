const modelos = require('../database/models');

module.exports = {
    crearInmueble: async (req, res) => {

        try {
            const {tipo, ubicacion,ambientes,superficie,precio,propietario} = req.body;

            const nuevoInmueble = await modelos.Inmuebles.create({
                tipo,
                ubicacion,
                ambientes,
                superficie,
                precio,
                propietario
            })
    
            if(nuevoInmueble){
                return res.status(200).json({
                    status: 200,
                    mensaje: "Inmueble creado con éxito"
                })
            }
    
        } catch (error) {
            console.log(error);
        }

       
    }
}