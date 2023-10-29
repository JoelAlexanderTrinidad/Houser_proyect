import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import useUsuario from "../../hooks/useUsuario";
import { Footer } from "../../components/Footer";

export const Login = () => {

  const {logearUsuario} = useUsuario();

  const validationSchema = Yup.object({
    email: Yup.string().required("Debe ingresar un email"),
    password: Yup.string().required("Debe ingresar un password"),
   
  })

  const initial_values = {
    email: "",
    password: ""
  }

  const handleSubmit = async (values) => {
    try {
      logearUsuario(values);
    } catch (error) {
      console.log(error);
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
          <form onSubmit={formik.handleSubmit} className="relative mx-auto flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-10">
            <div className="flex flex-col gap-4 p-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <label htmlFor="email" className="ms-1">
                  Email
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
              </div>
              <ErrorMessage
                  name='email'
                  component="div"
                  className='text-red-500 ms-1 '
              />
              <div className="relative h-11 w-full min-w-[200px] mt-3">
                <label htmlFor="password" className="ms-1 mt-3">
                    Password
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
                  className='text-red-500 ms-1 mt-3'
              />
              <div className="-ml-2.5">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="checkbox"
                    data-ripple-dark="true"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                      id="checkbox"
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                    htmlFor="checkbox"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full pe-10"
                type="submit"
                data-ripple-light="true"
              >
                Ingresá
              </button>
            
              <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                ¿No tenés cuenta?
                <Link to={'/register'} className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased">
                  Registrate
                </Link>
              </p>
            </div>
          </form>
        )
      }
    </Formik>
    <Footer />
    </>
  );
};
