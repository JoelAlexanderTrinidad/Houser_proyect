import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <div className="flex items-center justify-between border-b-2 py-4 px-10">
      <div> <Link to={"/"}>LOGO</Link></div>
      <div className="flex gap-4">
        <Link to={"/vender"}>Vender o alquilar</Link>
        <Link to={"/login"}>Ingresá</Link>
      </div>
    </div>
  );
}