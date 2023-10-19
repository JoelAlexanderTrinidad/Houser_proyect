import { createContext, useState } from "react";
import PropTypes from 'prop-types';
// import { getInmuebles } from "../sevices/inmueblesService";
import axios from "axios";

export const InmuebleContext = createContext(null);

export const InmueblesProvider = ({children}) => {

  const [inmuebles, setInmuebles] = useState([]);


  const traerInmuebles = async (value) => {
    const keyword = value.ubicacion;
    try {
        const response = await axios.get(`http://localhost:3000/inmuebles/buscar?keyword=${keyword}`);
        const data = response.data.data
        setInmuebles(data)
      //  console.log('Respuesta de Elasticsearch:', response.data);
      } catch (error) {
        console.error(error);
      }
  }

  const contextValue = {
    inmuebles,
    traerInmuebles
  }
  return (
    <InmuebleContext.Provider value={contextValue}>
      {children}
    </InmuebleContext.Provider>
  )
}

InmueblesProvider.propTypes = {
  children: PropTypes.node.isRequired
}
