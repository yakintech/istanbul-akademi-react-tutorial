import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/HomePage"
import { Link, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import ProfilePage from "./pages/ProfilePage"
import Suppliers from "./pages/Suppliers"
import Users from "./pages/Users"
import Todos from "./pages/Todos"
import AddProduct from "./pages/AddProduct"
import OrdersPage from "./pages/OrdersPage"
import List from "./pages/suppliers/List"
import Add from "./pages/suppliers/Add"
import Update from "./pages/suppliers/Update"
import Detail from './pages/suppliers/Detail'
import GridSample from "./muiSample/GridSample"
import StackSample from "./muiSample/StackSample"
import AddProductMUI from "./muiSample/AddProductMUI"
import ProductsDataGrid from "./muiSample/ProductsDataGrid"
// import Detail from "./components/Detail"


function App() {


  return <ProductsDataGrid/>


  return <>
  <ul style={{display:'flex', justifyContent:"space-evenly"}}>
    <Link to='/'>Home</Link>
    <Link to='/suppliers'>Suppliers</Link>
    {/* <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/products'>Products</Link>
    <Link to='/profile'>Profile</Link>
    <Link to='/suppliers'>Suppliers</Link>
    <Link to='/users'>Users</Link>
    <Link to='/todos'>Todos</Link>
    <Link to='/add-product'>Add Product</Link>
    <Link to='/orders'>Orders</Link> */}
  </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      {/* <Route path="/suppliers" element={<Suppliers/>}/> */}
      <Route path="/users" element={<Users/>} />
      <Route path="/todos" element={<Todos/>} />
      <Route path="/add-product" element={<AddProduct/>}/>
      <Route path="/orders" element={<OrdersPage/>} />

      {/* Suppliers routes */}
      <Route path="/suppliers" element={<List/>}/>
      <Route path="/suppliers/add" element={<Add/>}/>
      <Route path="/suppliers/update/:id" element={<Update/>}/>
      <Route path="/suppliers/detail/:id" element={<Detail/>}/>



      <Route path="*" element={<NotFound/>} />
    </Routes>


  </>


}

export default App


//STATE, PROPS, EFFECT








