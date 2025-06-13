import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Breadcrumb from './Components/Breadcrumb'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Products from './Components/Pages/Products'
import Service from "./Components/Pages/Service/Service"
import Home from './Components/Pages/Home/Home'
import Notfound from './Components/Pages/Notfound'
import Camera from './Components/Pages/Service/Camera'
import Mobile from './Components/Pages/Service/Mobile'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       
       <Router>
        <Breadcrumb/>
<Routes>
  <Route path="/" element={<Home/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/products/services" element={<Service/>}/>
<Route path="/products/services/camera" element={<Camera/>}/>
<Route path="/products/services/mobile" element={<Mobile/>}/>

<Route path="*" element={<Notfound/>}/>
</Routes>

       </Router>
        </div>
  )
}

export default App
