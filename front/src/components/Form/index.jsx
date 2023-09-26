import { ErrorMessage, Field, Formik } from "formik"
import axios from "axios";
import { useState } from "react";
import * as Yup from 'yup'
// import useInmueble from "../../hooks/useInmueble"

export const SearchForm = () => {

    const validationSchema = Yup.object({
        ubicacion: Yup.string().required("Ingrese una ubicación"),
      })
    

    // const {inmuebles} = useInmueble();
    const [loading, setLoading] = useState(false)

    const initial_values = {
        ubicacion: "",
    }

    const handleSubmit = async (value) => {
        console.log(value)
        try {
            const response = await axios.get(`http://localhost:3000/inmuebles/buscar?keyword=${value.ubicacion}`);
           console.log('Respuesta de Elasticsearch:', response.data);
          } catch (error) {
            console.error(error);
          }
    };
    

  return (
    <Formik
        initialValues={initial_values}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
        {
            (formik) => (
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                    <div>
                        <label htmlFor="ubicacion" className="ms-1">Ingrese una ubicación</label>
                       <Field
                        id="ubicacion"
                        type="text"
                        name="ubicacion"
                        placeholder="Ej. congreso, balvanera, saavedra, etc"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       />

                        <ErrorMessage
                            name='ubicacion'
                            component="div"
                            className='text-red-500 ms-1'
                        />
                    </div>
                    
                    <button type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full pe-10"><i className="fa-solid fa-magnifying-glass pe-4"></i>Buscar</button>
                </form>
            )
        }
    </Formik>
  )
}
