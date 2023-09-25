import axios from "axios";

const elasticsearchUrl = 'http://localhost:9200/_search/';

const searchQuery = {
  query: {
    bool: {
      should: [
        {
          match: {
            barrio: {
              query: "monserrat",
              fuzziness: "AUTO"
            }
          }
        },
        {
          match: {
            ciudad: {
              query: "",
              fuzziness: "AUTO"
            }
          }
        }
      ]
    }
  }
};


export const getInmuebles = () => {
    axios.post(elasticsearchUrl, searchQuery)
    .then((response) => {
      console.log('Respuesta de Elasticsearch:', response.data);
    })
    .catch((error) => {
      console.error('Error al realizar la solicitud a Elasticsearch:', error);
    });
  
}