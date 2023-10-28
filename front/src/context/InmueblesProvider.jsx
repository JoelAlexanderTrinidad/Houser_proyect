import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

export const InmuebleContext = createContext(null);

export const InmueblesProvider = ({children}) => {

  const [inmuebles, setInmuebles] = useState([]);
  const [inmuebleID, setInmuebleID] = useState([]);
  const [reserva, setReserva] = useState(false);

  const traerInmuebles = async (value) => {
    const keyword = value.ubicacion;
    try {
        const response = await axios.get(`http://localhost:3000/inmuebles/buscar?keyword=${keyword}`);
        const data = response.data.data;
        setInmuebles(data);
      } catch (error) {
        console.error(error);
      }
  }

  const traerInmuebleID = async (inmuebleID) => {
    try {
      const response = await axios.get(`http://localhost:3000/inmuebles/${inmuebleID}`);
      const data = response.data.data
      setInmuebleID(data)
    } catch (error) {
      console.error(error);
    }
  }

  const handleReserva = async (inmuebleID) => {
    console.log(localStorage.getItem("jwtoken"))
    
    try {
      const response = await axios.patch(`http://localhost:3000/inmuebles/reservar/${inmuebleID}`);
      console.log("RESPONSE: ", response)
      setReserva(true);
      setTimeout(() => {
        setReserva(false);
      }, 3000); 
    } catch (error) {
      console.error(error);
    }
  }

  const contextValue = {
    inmuebles,
    traerInmuebles,
    traerInmuebleID,
    inmuebleID,
    handleReserva,
    reserva
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
