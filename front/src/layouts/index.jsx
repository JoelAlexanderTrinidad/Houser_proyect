import { BrowserRouter } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import PropTypes from 'prop-types'

export const Layouts = ({children}) => {
  return (
    <BrowserRouter>
        <Header />
            {children}
        <Footer />
    </BrowserRouter>
  )
}

Layouts.propTypes = {
    children: PropTypes.node.isRequired
}