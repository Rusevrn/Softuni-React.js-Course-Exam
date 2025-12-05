import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Details from "./components/details/Details"
import Catalog from "./components/catalog/Catalog"
import Contact from "./components/Contact"
import AuthForm from "./components/AuthForm"
import EditGame from "./components/EditGame"
import CreateGame from "./components/CreateGame"
import { UserProvider } from "./contexts/UserContext"


function App() {

  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:_id' element={<Details />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<AuthForm />} />
        <Route path='/details/:_id/edit' element={<EditGame />} />
        <Route path='/create' element={<CreateGame />} />
      </Routes>
      <Footer />
    </UserProvider>
  )
}

export default App
