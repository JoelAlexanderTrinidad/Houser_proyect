import { BrowserRouter } from "react-router-dom"
import { Header } from "../components/Header"
import PropTypes from 'prop-types'

export const Layouts = ({children}) => {
  return (
    <BrowserRouter>
        <Header />
            {children}
    </BrowserRouter>
  )
}

Layouts.propTypes = {
    children: PropTypes.node.isRequired
}