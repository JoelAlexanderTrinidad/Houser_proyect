import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home } from "../components/Home"


export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}
