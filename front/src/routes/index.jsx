import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Login } from "../pages/Login"
import { Vender } from "../pages/Vender"


export const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vender" element={<Vender />} />
        </Routes>
  )
}