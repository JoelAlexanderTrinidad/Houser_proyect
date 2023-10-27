import useInmueble from "../../hooks/useInmueble"
import { Card } from "../Cards";

export const InmueblesList = () => {

  const {inmuebles} = useInmueble();

  return (
    <div className="my-10 ">
    {
      inmuebles.map(inmueble => (
        <Card key={inmueble.id} inmueble= {inmueble} />
      ))
    }
    </div>
    
  )
}
