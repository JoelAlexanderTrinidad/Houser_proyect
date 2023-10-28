import axios from "axios";
import PropTypes from 'prop-types';
import { createContext } from "react";

export const UsuarioContext = createContext(null);

export const UsuariosProvider = ({children}) => {



    const logearUsuario = async (values) => {
        try {
            const response = await axios.post(`http://localhost:3000/users/login`,{
                email: values.email,
                password: values.password,
            });
            const data = response.data;

            localStorage.setItem('jwtoken', data.token);
            if(localStorage.getItem('jwtoken')) {
                console.log('El token está presente en el localStorage.');
              } else {
                console.log('El token no está presente en el localStorage o ha expirado.');
              }
            axios.defaults.headers.common['Authorization'] = 'Bearer'+data.token;
            window.location.href = '/'
        } catch (error) {
            console.log(error);
        }
    }

    // const verificarToken =  () => {
    //     try {
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const contextValue = {
        logearUsuario,
    }

    return(
        <UsuarioContext.Provider value={contextValue}>
            {children}
        </UsuarioContext.Provider>
    )

}

UsuariosProvider.propTypes = {
    children: PropTypes.node.isRequired
  }
  