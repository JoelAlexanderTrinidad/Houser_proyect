const modelos = require('../database/models');

module.exports = {
    crearInmueble: async (req, res) => {

        try {
            const {tipo, ubicacion,ambientes,superficie,precio,propietario} = req.body;

            const nuevoInmueble = await modelos.Inmuebles.create({
                tipo,
                ubicacion,
                ambientes: +ambientes,
                superficie: +superficie,
                precio: +precio,
                propietario
            })
    
            if(nuevoInmueble){
                return res.status(201).json({
                    status: 201,
                    mensaje: "Inmueble creado con éxito"
                })
            }
    
        } catch (error) {
            console.log(error);
        }

    },
    modificarInmueble: async (req, res) => {

        const idInmueble = req.params.id;

        if(isNaN(idInmueble)){
            return res.status(400).json({
                mensaje: "Id de producto inválido"
            })
        }

        try {
            const {tipo, ubicacion,ambientes,superficie,precio,propietario} = req.body;

            const inmueble = await modelos.Inmuebles.findByPk(idInmueble);

            const inmuebleActualizado = await modelos.Inmuebles.update({
                tipo,
                ubicacion,
                ambientes: +ambientes,
                superficie: +superficie,
                precio: +precio,
                propietario
            },
            {
                where :{
                    id : inmueble.id
                }
            });

            return res.status(200).json({
                status: "OK",
                mensaje: "Inmueble actualizado con éxito"
            })

        } catch (error) {
            console.log(error);
        }

    }
}