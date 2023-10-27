import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel'
import { Link } from 'react-router-dom';

export const Card = ({inmueble}) => {

    // console.log(">>>>>", inmueble)

  return (
    <>
        <div className="md:hidden max-w-sm my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Carousel>
                {
                    inmueble.imagenes.map((image, index) => {
                        return <img key={index} className="rounded-t-lg" src={`http://localhost:3000/imagenes/${image.file}`} alt="" />
                    })
                }
            </Carousel>
            {/* <img className="rounded-t-lg" src={`http://localhost:3000/imagenes/${inmueble.imagenes[0].file}`} alt="" /> */}
            <div className="p-5">
                <Link to={"/detalles"}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ubicación: {inmueble.ubicacion}</h5>
                </Link>
                <p className="mb-3 text-gray-700 dark:text-gray-400 font-bold">Precio: <span className='text-green-500'>{inmueble.precio}</span></p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tipo: {inmueble.tipo}</p>
                <Link to={`/detalles/${inmueble.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ver detalles 
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

                    {/*  */}
        <div className="flex flex-col justify-center mb-4">
            <div
                className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <Carousel>
                {
                    inmueble.imagenes.map((image, index) => {
                        return <img key={index} className="rounded-t-lg" src={`http://localhost:3000/imagenes/${image.file}`} alt="" />
                    })
                }
            </Carousel>
                </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                        <div className="flex justify-between item-center">
                            <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <p className="text-gray-600 font-bold text-sm ml-1">
                                    4.96
                                    <span className="text-gray-500 font-normal">(76 reviews)</span>
                                </p>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                           
                        </div>
                        <Link to={"/detalles"}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ubicación: {inmueble.ubicacion}</h5>
                        </Link>
                        <p className="mb-3 text-gray-700 dark:text-gray-400 font-bold">Precio: <span className='text-green-500'>{inmueble.precio}</span></p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tipo: {inmueble.tipo}</p>
                        <Link to={`/detalles/${inmueble.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Ver detalles 
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>

                    </div>
                </div>
            </div>

    
    </>

  )
}

Card.propTypes = {
    inmueble: PropTypes.object.isRequired
}