// const { Client } = require('@elastic/elasticsearch')
// const index_name =  "prueba"
// const url =  'http://localhost:9200'

// async function assert_index(client) {
//   return client.indices.exists({
//     index: index_name
//    })
// }

// async function create_index(client) {
//   return client.indices.create({index: index_name})
// }

// async function run(client) {
//   await client.index({
//     index: 'prueba',
//     body: {
//       depas: 'depa 1',
//     }
//   })

//   await client.index({
//     index: 'prueba',
//     body: {
//       depas: 'depa 2',
//     }
//   })

//   await client.index({
//     index: 'prueba',
//     body: {
//       depas: 'depa 3',
//     }
//   })

//   await client.indices.refresh({index: 'prueba'})
// }

// async function main(){
//   const client = new Client({ node: url, ssl: { rejectUnauthorized: false } })
//   const response = await assert_index(client)
//   const bad_request = 404

//   if(response.statusCode === bad_request){
//     console.log("El índice no existe")
//     const response = await create_index(client)
//     console.log(response)
//   }
//   console.log(response.statusCode)
//   await run(client)
// }

// main()
