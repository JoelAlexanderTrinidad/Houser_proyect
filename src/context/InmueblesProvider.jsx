import { createContext } from "react";
import PropTypes from 'prop-types';
import { getInmuebles } from "../sevices/inmueblesService";

export const InmuebleContext = createContext(null);

export const InmueblesProvider = ({children}) => {

  // const [inmuebles, setInmuebles] = useState([]);


  const inmuebles = getInmuebles();

  console.log(inmuebles)
  
  const contextValue = {
    inmuebles
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
