import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import PropTypes from 'prop-types'

export const Layouts = ({children}) => {
  return (
    <div>
        <Header />
            {children}
        <Footer />
    </div>
  )
}

Layouts.propTypes = {
    children: PropTypes.node.isRequired
}