const { Client } = require('@elastic/elasticsearch');
const url =  'http://localhost:9200';
const client = new Client({ node: url, ssl: { rejectUnauthorized: false } });
const modelos = require('../database/models');
const indexInmueble = require('../database/serviciosElastic/crearIndex')
const eliminarInmuebleElastic = require('../database/serviciosElastic/eliminar')
const actualizarInmuebleElastic= require('../database/serviciosElastic/actualizar');
const getLocation = require('../database/serviciosStreetMap/getLocation');

module.exports = {
    crearInmueble: async (req, res) => {

        try {
            const {tipo, ubicacion,ambientes,superficie,precio,propietario} = req.body;

            const location = await getLocation(ubicacion)
            const locationArr =  location.split(', ');

            const nuevoInmueble = await modelos.Inmuebles.create({
                tipo,
                ubicacion,
                ambientes: +ambientes,
                superficie: +superficie,
                precio: +precio,
                propietario,
                disponible: true
            })

            const idImueble = nuevoInmueble.id

            if(req.files && req.files.length > 0){
                const imagenes = req.files.map(imagen => {
                    let image = {
                        id_inmueble: idImueble,
                        file: imagen.filename
                    }
                    console.log(image)
                    return image;
                });
                await modelos.Images.bulkCreate(imagenes,{validate :true})
                console.log("#####",imagenes)
            }
            
            if(nuevoInmueble){
                const inmuebleElastic = {
                    id:idImueble,
                    tipo,
                    ubicacion,
                    ambientes: +ambientes,
                    superficie: +superficie,
                    precio: +precio,
                    propietario,
                    ciudad: locationArr[3],
                    barrio: locationArr[2],
                    disponible:true
                  };
                  
                  const indexResponse = await indexInmueble(inmuebleElastic);
                  console.log("Inmueble indexado en Elasticsearch:", indexResponse);

                return res.status(201).json({   
                    status: 201,
                    mensaje: "Inmueble creado con éxito",
                    body: req.body
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
                
                await actualizarInmuebleElastic(idInmueble, req.body);

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
                    mensaje: "Inmueble no encontrado"
                });
            }
    
            await modelos.Inmuebles.destroy({
                where: {
                    id: idInmueble
                }
            });
            
            await eliminarInmuebleElastic(idInmueble);
    
            return res.status(200).json({
                mensaje: "Inmueble eliminado con éxito"
            });

        } catch (error) {
            console.log(error);
        }

    },
    buscarInmueble: async (req, res) => {

        const {keyword} = req.query;
        // const expanded =  keyword + "~2"
        // const inmuebles = await client.indices.refresh({ index: 'inmuebles' })

        const { body } = await client.search({
            index: 'inmuebles',
            body: {
                query: {
                    bool: {
                        should: [
                            {
                                match: {
                                    barrio: {
                                        query: keyword,
                                        fuzziness: "AUTO"
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        });

        let inmuebles = body.hits.hits.map(inmueble => inmueble._source)

        if(body.hits.hits.length > 0){
            const ids = body.hits.hits.map(inmueble => inmueble._source.id)
            const inmueblesEncontrados = await modelos.Inmuebles.findAll({
                where: {
                  id: ids 
                },
                include: {
                    model: modelos.Images,
                    as: 'imagenes'
                  }
              });

              inmuebles = inmueblesEncontrados.map(inmueble => {
                return {
                    ...inmueble.dataValues
                }
              })
              
            //   imagenes = inmueblesEncontrados.flatMap(inmueble => 
            //     inmueble.imagenes.map(imagen => imagen.dataValues.file)
            //   );
            //   console.log(imagenes)
            //   console.log("inmueblesEncontrados: ",  inmueblesEncontrados[0].dataValues.imagenes[0].dataValues.file)
        }

        // console.log(imagenes)

         return res.status(200).json({
            resultados: inmuebles.length,
            data: inmuebles,
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