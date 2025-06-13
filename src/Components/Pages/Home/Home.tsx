import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
        <div className="container"><h1>HomePage </h1>
    <Link to="/products">Link to product page</Link></div></div>
  )
}

export default Home