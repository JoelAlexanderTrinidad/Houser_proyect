import { InmueblesProvider } from "./context/InmueblesProvider"
import { UsuariosProvider } from "./context/usuariosProvider"
import { Layouts } from "./layouts"
import { AppRoutes } from "./routes"

function App() {

  return (
    <>
    <InmueblesProvider>
      <UsuariosProvider>
        <Layouts>
          <AppRoutes />
        </Layouts>
      </UsuariosProvider>
    </InmueblesProvider>
    </>
  )
}

export default App
