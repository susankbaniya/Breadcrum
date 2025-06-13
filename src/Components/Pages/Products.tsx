import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className="home" >
        <div className="container">
        <h1>product list</h1>
    <Link to="/products/services">Services here</Link></div></div>
  )
}

export default Products