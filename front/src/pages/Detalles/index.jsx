import { useParams } from 'react-router-dom';
import useInmueble from '../../hooks/useInmueble';
import { useEffect } from 'react';
import Carousel from 'nuka-carousel';
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/dark.css';

export const Detalles = () => {

    const mostrarNotificacion = () => toast('Tenés que estar logeado para realizar esta acción!',  { theme: 'dark', duration: 2000, position: 'center' });
    const { id } = useParams();
    const {traerInmuebleID, inmuebleID, handleReserva,reserva} = useInmueble();

    useEffect(() => {
      traerInmuebleID(id);
    },[reserva])


    const reservarHandler = () => {
      if(!(localStorage.getItem("jwtoken") == null)){
        handleReserva(id);
      }else{
        mostrarNotificacion();
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
       
      }
    };
    
    
  return (
    
    <div className="my-10 w-10/12 mx-auto">
            {inmuebleID.imagenes && (
                <Carousel>
                    {inmuebleID.imagenes.map((image, index) => (
                        <img
                            key={index}
                            className="rounded-t-lg"
                            src={`http://localhost:3000/imagenes/${image.file}`}
                            alt=""
                        />
                    ))}
                </Carousel>
            )}
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {inmuebleID.tipo}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {inmuebleID.ubicacion}
                </p><p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Precio: <span className='text-green-600 font-bold'>${inmuebleID.precio}</span>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Superficie: {inmuebleID.superficie} m²
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Ambientes: {inmuebleID.ambientes}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Propietario: {inmuebleID.propietario}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Disponible: {inmuebleID.disponible ? "SI" : "NO"}
                </p>

                <button 
                  onClick={ reservarHandler } 
                  disabled={!inmuebleID.disponible} 
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${!inmuebleID.disponible ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span style={{ textDecoration: inmuebleID.disponible ? 'none' : 'line-through' }}>RESERVAR</span>
                </button>
            
            </div>
        </div>
  )
}
