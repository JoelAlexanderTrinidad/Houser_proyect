import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel'

export const Card = ({inmueble}) => {

    // console.log(">>>>>", inmueble.imagenes[0].file)

  return (
    <div className="max-w-sm my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Carousel>
            {
                inmueble.imagenes.map((image, index) => {
                    return <img key={index} className="rounded-t-lg" src={`http://localhost:3000/imagenes/${image.file}`} alt="" />
                })
            }
        </Carousel>
        {/* <img className="rounded-t-lg" src={`http://localhost:3000/imagenes/${inmueble.imagenes[0].file}`} alt="" /> */}
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ubicación: {inmueble.ubicacion}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Precio: {inmueble.precio}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tipo: {inmueble.tipo}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
  )
}

Card.propTypes = {
    inmueble: PropTypes.object.isRequired
  }
  