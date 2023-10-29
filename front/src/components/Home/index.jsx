import { Footer } from "../Footer"
import { SearchForm } from "../Form"
import { InmueblesList } from "../InmueblesList"

export const Home = () => {
    return (
      <div className="w-11/12 mx-auto h-80 mt-5">
        <h3 className="text-center text-2xl my-6 mt-10">Buscá propiedades en alquiler</h3>
        <SearchForm />
        <InmueblesList />
        <Footer />
      </div>
    )
  }
  