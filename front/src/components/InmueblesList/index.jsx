import useInmueble from "../../hooks/useInmueble"
import { Card } from "../Cards";

export const InmueblesList = () => {

  const {inmuebles} = useInmueble();

  console.log(inmuebles)

  return (
    <div className="my-10 ">
    {
      inmuebles.length !== 0 
      ?
      inmuebles.map(inmueble => (
        <Card key={inmueble.id} inmueble= {inmueble} />
      ))
      :
      <p className="text-red-500 font-bold">Sin resultados, ingrese un barrio de la Ciudad de Buenos Aires ej. balvanera</p>
    }
    </div>
    
  )
}
