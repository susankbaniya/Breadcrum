import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
  <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{color:"red"}}> 404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
<h1 style={{color:"red"}}>Go back to home</h1>
    </div>
  )
}

export default Notfound