import NotFound from "./pages/NotFound"
import { Route, Routes } from "react-router-dom"
import List from "./pagesMUI/products/List"
import Add from "./pagesMUI/products/Add"
import Update from "./pagesMUI/products/Update"
import CustomerList from "./pagesMUI/customers/CustomerList"
import DashboardLayout from "./layout/DashboardLayout"
import CounterSample from "./stateSamples/CounterSample"
import Favorites from "./pagesMUI/Favorites"



function App() {



  return <>


    <DashboardLayout>
      <Routes>
        <Route path="/products" element={<List />} />
        <Route path="/products/update/:id" element={<Update />} />
        <Route path="/products/add" element={<Add />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </DashboardLayout>





  </>


}

export default App


//STATE, PROPS, EFFECT








