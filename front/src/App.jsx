import { InmueblesProvider } from "./context/InmueblesProvider"
import { Layouts } from "./layouts"
import { AppRoutes } from "./routes"

function App() {

  return (
    <>
    <InmueblesProvider>
      <Layouts>
        <AppRoutes />
      </Layouts>
    </InmueblesProvider>
    </>
  )
}

export default App
