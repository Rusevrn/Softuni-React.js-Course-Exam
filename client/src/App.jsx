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
import RouteGuard from "./components/RouteGuard"
import Profile from "./components/Profile"


function App() {

  return (
    <UserProvider>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/details/:_id' element={<Details />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/contact-us' element={<Contact />} />

        <Route path='/login'
          element={
            <RouteGuard guest>
              <AuthForm />
            </RouteGuard>
          } />

        <Route path='/details/:_id/edit' element={<EditGame />} />

        <Route path='/create'
          element={
            <RouteGuard>
              <CreateGame />
            </RouteGuard>
          } />

        <Route
          path="/profile"
          element={
            <RouteGuard>
              <Profile />
            </RouteGuard>
          }
        />

      </Routes>
      <Footer />
    </UserProvider>
  )
}

export default App
