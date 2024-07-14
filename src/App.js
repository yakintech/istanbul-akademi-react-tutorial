import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/HomePage"
import { Link, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import ProfilePage from "./pages/ProfilePage"
import StateIntro from "./stateSamples/StateIntro"
import CounterSample from "./stateSamples/CounterSample"
import ArraySample from "./stateSamples/ArraySample"
import ArraySample2 from "./stateSamples/ArraySample2"
import BooleanSample from "./stateSamples/BooleanSample"
import ImageStateSample from "./stateSamples/ImageStateSample"
import StyleStateSample from "./stateSamples/StyleStateSample"
import StyleStateSample2 from "./stateSamples/StyleStateSample2"
import Suppliers from "./pages/Suppliers"
import Users from "./pages/Users"
import Todos from "./pages/Todos"


function App() {


  return <>
  <ul style={{display:'flex', justifyContent:"space-evenly"}}>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/products'>Products</Link>
    <Link to='/profile'>Profile</Link>
    <Link to='/suppliers'>Suppliers</Link>
    <Link to='/users'>Users</Link>
    <Link to='/todos'>Todos</Link>
  </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/suppliers" element={<Suppliers/>}/>
      <Route path="/users" element={<Users/>} />
      <Route path="/todos" element={<Todos/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>


  </>


}

export default App


//STATE, PROPS, EFFECT








