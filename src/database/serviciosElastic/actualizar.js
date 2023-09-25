const { Client } = require('@elastic/elasticsearch');
const index_name = "inmuebles";
const url = 'http://localhost:9200';

const clientUp = new Client({ node: url, ssl: { rejectUnauthorized: false } });

async function actualizarInmuebleElastic(idInmueble, nuevosDatos) {
    const searchResponse = await clientUp.search({
        index: index_name,
        body: {
            query: {
                match: {
                    "id": idInmueble
                }
            }
        }
    });
   
    const hits = searchResponse.body.hits.hits;

    if (hits.length > 0) {
        const documentIdToUpdate = hits[0]._id;

            await clientUp.update({
            index: index_name,
            id: documentIdToUpdate,
            body: {
                doc: nuevosDatos
            }
            });
        
            await clientUp.indices.refresh({ index: index_name });
        

        console.log("inmueble actualizado con éxito.");
    } else {
        console.log("No se encontró ningún inmueble con el ID proporcionado.");
    }
}

module.exports = (actualizarInmuebleElastic);