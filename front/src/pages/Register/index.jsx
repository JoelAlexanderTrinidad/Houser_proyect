import axios from "axios";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';
import { Footer } from "../../components/Footer";

export const Register = () => {

    const validationSchema = Yup.object({
        nombre: Yup.string().required("Debe ingresar un nombre"),
        apellido: Yup.string().required("Debe ingresar un apellido"),
        tel: Yup.string().required("Debe ingresar un teléfono"),
        email: Yup.string().required("Debe ingresar un email"),
        password: Yup.string().required("Debe ingresar un password"),
      })

    const initial_values={
        nombre: '',
        apellido: '',
        tel: '',
        email: '',
        password: '',
      }

      const handleSubmit = async (values) => {
        try {
            const response = await axios.post(`http://localhost:3000/users/register`,{
                nombre: values.nombre,
                apellido: values.apellido,
                tel: values.tel,
                password: values.password,
                email: values.email,
            });
            console.log(">>>", response.data);
            // window.location.href = "/";
        } catch (error) {
            console.log(error)
        }
      }


  return (
    <>
    <Formik
        initialValues={initial_values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {
            (formik) => (
                <form onSubmit={formik.handleSubmit} className="relative mx-auto flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative w-full min-w-[200px]">
                        <label htmlFor="nombre" className="ms-1">
                            Nombre
                        </label>
                        <Field
                            id="nombre"
                            type="text"
                            name="nombre"
                            placeholder="Josesito"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        />
                        
                        </div>
                        <ErrorMessage
                                name='nombre'
                                component="div"
                                className='text-red-500 ms-1 '
                            />
                        <div className="relative w-full min-w-[200px] ">
                        <label htmlFor="apellido" className="ms-1">
                            Apellido
                            </label>
                        <Field
                            id="apellido"
                            type="text"
                            name="apellido"
                            placeholder="Perez"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        </div>
                        <ErrorMessage
                                name='apellido'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        <div className="relative w-full min-w-[200px]">
                        <label htmlFor="tel" className="ms-1 ">
                            Teléfono
                            </label>
                        <Field
                            id="tel"
                            type="text"
                            name="tel"
                            placeholder="Teléfono"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        </div>
                        <ErrorMessage
                                name='tel'
                                component="div"
                                className='text-red-500 ms-1 '
                            />
                        <div className="relative w-full min-w-[200px] ">
                        <label htmlFor="password" className="ms-1 ">
                            Contraseña
                            </label>
                        <Field
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        </div>
                    
                        <ErrorMessage
                                name='password'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        <div className="relative w-full min-w-[200px]">
                        <label htmlFor="email" className="ms-1 ">
                            Email
                            </label>
                        <Field
                            id="email"
                            type="email"
                            name="email"
                            placeholder="ejemplo@gmail.com"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        </div>
                        <ErrorMessage
                                name='email'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        <button
                            className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full pe-10"
                            type="submit"
                            data-ripple-light="true"
                        >
                        Registrar
                        </button>
                    
                    </div>
                </form>
        )
}
    </Formik>
    <Footer />
    </>
  )
}
