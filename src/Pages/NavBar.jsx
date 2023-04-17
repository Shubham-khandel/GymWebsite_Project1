import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/login'>Login</Link>  
    </nav>
  )
}

export default NavBar
