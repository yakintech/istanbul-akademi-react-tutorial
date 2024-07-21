import NotFound from "./pages/NotFound"
import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import List from "./pagesMUI/products/List"
import Add from "./pagesMUI/products/Add"
import Update from "./pagesMUI/products/Update"


function App() {


  return <>

    <DashboardLayout>
      <Routes>
        <Route path="/products" element={<List/>} />
        <Route path="/products/update/:id" element={<Update/>} />
        <Route path="/products/add" element={<Add/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DashboardLayout>



  </>


}

export default App


//STATE, PROPS, EFFECT








