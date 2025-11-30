import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Details from "./components/details/Details"
import Catalog from "./components/catalog/Catalog"
import Contact from "./components/Contact"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
