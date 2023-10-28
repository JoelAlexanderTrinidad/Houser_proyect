import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Login } from "../pages/Login"
import { Vender } from "../pages/Vender"
import { Detalles } from "../pages/Detalles"
import { Register } from "../pages/Register"


export const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vender" element={<Vender />} />
            <Route path="/detalles/:id" element={<Detalles />} />
        </Routes>
  )
}