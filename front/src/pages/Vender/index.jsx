import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';
// import axios from 'axios';

export const Vender = () => {

    const validationSchema = Yup.object({
        tipo: Yup.string().required("Debe ingresar un tipo de inmueble"),
        ubicacion: Yup.string().required("Debe ingresar una ubicación"),
        ambientes: Yup.string().required("Debe ingresar la cantidad de ambientes"),
        superficie: Yup.string().required("Debe ingresar la superficie"),
        precio: Yup.string().required("Debe ingresar el precio"),
        propietario: Yup.string().required("Debe ingresar el propietario"),
    })

    const initial_values = {
        tipo: "",
        ubicacion: "",
        ambientes: "",
        superficie: "",
        precio: "",
        propietario: "",
        imagenes: ""
    }
    return(
        <Formik
            initialValues={initial_values}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values)
                // axios.post('http://localhost:3000/inmuebles/', values)
                //     .then(response => {
                //         console.log(response);
                //     })
                //     .catch(error => {
                //         console.error(error);
                //     });
            }}
        >
            {
                (formik) => (
                    <form 
                        onSubmit={formik.handleSubmit}
                        method="POST"
                        className="flex flex-col gap-3 my-10 w-10/12 mx-auto"
                        encType="multipart/form-data"
                    >
                        <div>
                            <label htmlFor="tipo" className="ms-1">Tipo</label>
                            <Field
                                id="tipo"
                                type="text"
                                name="tipo"
                                placeholder="Ej. departamento, casa, etc"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                             <ErrorMessage
                                name='tipo'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        </div>
                        <div>
                            <label htmlFor="ubicacion" className="ms-1">Ubicación</label>
                            <Field
                                id="ubicacion"
                                type="text"
                                name="ubicacion"
                                placeholder="Ej. Congreso"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                             <ErrorMessage
                                name='ubicacion'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        </div>
                        <div>
                            <label htmlFor="ambientes" className="ms-1">Ambientes</label>
                            <Field
                                id="ambientes"
                                type="number"
                                name="ambientes"
                                placeholder="Ej. 4"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                             <ErrorMessage
                                name='ambientes'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        </div>
                        <div>
                            <label htmlFor="superficie" className="ms-1">Superficie</label>
                            <Field
                                id="superficie"
                                type="number"
                                name="superficie"
                                placeholder="Ej. 80"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <ErrorMessage
                                name='superficie'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        </div>
                        <div>
                            <label htmlFor="precio" className="ms-1">Precio</label>
                            <Field
                                id="precio"
                                type="number"
                                name="precio"
                                placeholder="Ej. 120000"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <ErrorMessage
                                name='precio'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        </div>
                        <div>
                            <label htmlFor="propietario" className="ms-1">Propietario</label>
                            <Field
                                id="propietario"
                                type="text"
                                name="propietario"
                                placeholder="Ej. Lalo Landa"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <ErrorMessage
                                name='propietario'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        </div>
                        <div>
                            <label htmlFor="imagenes" className="ms-1">Imágenes</label>
                            <input
                                id="imagenes"
                                type="file"
                                name="imagenes"
                                method="POST"
                                accept='image/*'
                                onChange={(event) => {
                                    formik.setFieldValue("imagenes", event.currentTarget.files[0]);
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                multiple
                            />
                            <ErrorMessage
                                name="imagenes"
                                component="div"
                                className="text-red-500 ms-1"
                            />
                        </div>
                        <button type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full pe-10"><i className="fa-solid fa-magnifying-glass pe-4"></i>Crear inmueble</button>

                    </form>
                )
            }
        </Formik>
    )
}

