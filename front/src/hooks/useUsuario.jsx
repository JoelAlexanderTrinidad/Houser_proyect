import { useContext } from "react";
import { UsuarioContext } from "../context/usuariosProvider";

const useUsuario = () => {
  return useContext(UsuarioContext);
}

export default useUsuario;
