const { Client } = require('@elastic/elasticsearch');
const url =  'http://localhost:9200';
const client = new Client({ node: url, ssl: { rejectUnauthorized: false } });
const modelos = require('../database/models');
const indexInmueble = require('../database/serviciosElastic/crearIndex')

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
                propietario,
                disponible: true
            })

            if(nuevoInmueble){
                const inmuebleElastic = {
                    tipo,
                    ubicacion,
                    ambientes: +ambientes,
                    superficie: +superficie,
                    precio: +precio,
                    propietario
                  };
                  
                  const indexResponse = await indexInmueble(inmuebleElastic);
                  console.log("Inmueble indexado en Elasticsearch:", indexResponse);

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
                mensaje: "Id de inmueble inválido"
            })
        }

        try {
            const {tipo, ubicacion,ambientes,superficie,precio,propietario, disponible} = req.body;

            const inmueble = await modelos.Inmuebles.findByPk(idInmueble);

            if (!inmueble) {
                return res.status(404).json({
                  mensaje: "Inmueble no encontrado",
                });
            }else{
                await modelos.Inmuebles.update({
                    tipo,
                    ubicacion,
                    ambientes: +ambientes,
                    superficie: +superficie,
                    precio: +precio,
                    propietario,
                    disponible
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
            }

        } catch (error) {
            console.log(error);
        }

    },
    eliminarInmueble: async (req, res) => {

        const idInmueble = req.params.id;

        if(isNaN(idInmueble)){
            return res.status(400).json({
                mensaje: "Id de inmueble inválido"
            })
        }

        try {

            const inmueble = await modelos.Inmuebles.findByPk(idInmueble);

            if (!inmueble) {
                return res.status(404).json({
                  mensaje: "Inmueble no encontrado",
                });
            }else{
                await modelos.Inmuebles.destroy({
                    where: {
                        id: idInmueble
                    }
                })

                return res.status(200).json({
                    mensaje: "Inmueble eliminado con éxito"
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    },
    buscarInmueble: async (req, res) => {
        const {keyword} = req.query;
        const expanded =  keyword + "~2"

        await client.indices.refresh({ index: 'inmuebles' })

        const { body } = await client.search({
            index: 'inmuebles',
            body: {
              query: {
                query_string:{
                    default_field: "propietario",
                    query: expanded
                }
              }
            }
        })

        // console.log(body.hits.hits)
        return res.status(200).json({
            resultados: body.hits.hits.length,
            data: body.hits.hits
        })
    },
    reservar: async (req, res) => {
        const idInmueble = req.params.id;
        const inmueble = await modelos.Inmuebles.findByPk(idInmueble);

        try {
            if (!inmueble) {
                return res.status(404).json({ message: 'Inmueble no encontrado' });
            }

            if(inmueble.disponible == true){
                return res.status(200).json({ message: 'Ya está reservado' });
            }
    
            inmueble.disponible = false;
            await inmueble.save();
            
            return res.status(200).json({ message: 'Propiedad reservada exitosamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }

    },
    cancelarReserva: async (req, res) => {
        const idInmueble = req.params.id;
        const inmueble = await modelos.Inmuebles.findByPk(idInmueble);

        try {
            if (!inmueble) {
                return res.status(404).json({ message: 'Inmueble no encontrado' });
            }

            if(inmueble.disponible == false){
                return res.status(200).json({ message: 'Vuelve a estar disponible' });
            }
    
            inmueble.disponible = !inmueble.disponible;
            console.log(inmueble.disponible)

            await inmueble.save();
    
            res.status(200).json({ message: 'Propiedad cancelada exitosamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}