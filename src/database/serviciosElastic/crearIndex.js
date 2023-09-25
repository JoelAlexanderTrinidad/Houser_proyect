const { Client } = require('@elastic/elasticsearch');
const index_name =  "inmuebles";
const url =  'http://localhost:9200';

    const client = new Client({ node: url, ssl: { rejectUnauthorized: false } });

    // async function assert_index() {
    //     return client.indices.exists({
    //     index: index_name
    //     });
    // }
    
    // async function create_index() {
    //     return client.indices.create({ index: index_name });
    // }
    
    async function indexInmueble(inmueble) {
        await client.index({
        index: index_name,
        body: inmueble
        });
    
        await client.indices.refresh({ index: index_name });
    }


module.exports = (indexInmueble);