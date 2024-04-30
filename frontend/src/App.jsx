import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom"

//import { Dashboard } from "./pages/Dashboard"
import { Navbar } from "./Components/Navbar/Navbar"

function App() {

  return (
    <>
      {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar/>}/>

          </Routes>
      </BrowserRouter> */}
      <Navbar/>
    </>
  )
}

export default App
