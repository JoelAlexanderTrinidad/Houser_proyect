import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {

  const [usuarioLogeado, setUsuarioLogeado] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('jwtoken')) {
      setUsuarioLogeado(true)
    } 
  },[])
  
  const logout = async () => {
    localStorage.removeItem('jwtoken');
    window.location.href = '/'
  }

  return (
    
    <div className="flex items-center justify-between border-b-2 py-4 px-10">
      <div> <Link to={"/"}>HOUSER</Link></div>
      <div className="flex gap-4">
        {
          usuarioLogeado 
          ?  
            <>
              <Link to={"/vender"}>Vender o alquilar</Link> 
              <button onClick={logout} type="submit">Salir</button>
            </>

          :  
            <Link to={"/login"}>Ingresá</Link>
        }
       
      </div>
    </div>
  );
}