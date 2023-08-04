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
                propietario
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
            const {tipo, ubicacion,ambientes,superficie,precio,propietario} = req.body;

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

        await client.indices.refresh({ index: 'inmuebles' })

        const { body } = await client.search({
            index: 'inmuebles',
            body: {
              query: {
                match: { propietario: keyword }
              }
            }
          })

        console.log(body.hits.hits)
          
        return res.status(200).json({
            resultados: body.hits.hits.length,
            data: body.hits.hits
        })
    }
}