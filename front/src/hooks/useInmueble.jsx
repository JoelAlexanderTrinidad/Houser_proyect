import { useContext } from "react";
import { InmuebleContext } from "../context/InmueblesProvider";

const useInmueble = () => {
  return useContext(InmuebleContext);
}

export default useInmueble;
