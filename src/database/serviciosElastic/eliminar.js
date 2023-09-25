const { Client } = require('@elastic/elasticsearch');
const index_name = "inmuebles";
const url = 'http://localhost:9200';

const clientDel = new Client({ node: url, ssl: { rejectUnauthorized: false } });

async function eliminarInmuebleElastic(idInmueble) {
    const searchResponse = await clientDel.search({
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
        const documentIdToDelete = hits[0]._id;

        await clientDel.delete({
            index: index_name,
            id: documentIdToDelete
        });

        console.log("inmueble eliminado con éxito.");
    } else {
        console.log("No se encontró ningún inmueble con el ID proporcionado.");
    }
}




module.exports = (eliminarInmuebleElastic);