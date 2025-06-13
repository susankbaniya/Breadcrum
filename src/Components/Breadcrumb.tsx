import React from 'react'
import "./Breadcrumb.css"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Breadcrumb = () => {
    const location=useLocation();
  return (
    <div className="breadcrumb">
        <Link to="/">Home</Link>
        
         {location.pathname.includes('/products') && (
        <>
          <span> &gt; </span>
          <Link to="/products">Products</Link>
        </>
      )}
       {location.pathname.includes('/products/services')&& (
        <>
          <span> &gt; </span>
   <Link to="/products/services">Services</Link>        </>
      )}{
location.pathname.includes("/products/services/camera") && (
    <>
    <span>&gt;</span>
<p className="servicespan">Camera</p>    
    </>
)

      }
      {
        location.pathname.includes("/services/mobile") &&(
            <>
             <span>&gt;</span>
<p className="servicespan">Mobiles</p>  </>
        )
      }
         </div>
  )
}

export default Breadcrumb