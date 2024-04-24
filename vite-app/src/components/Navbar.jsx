import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
            <ul>
                <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/"><li>Home</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/gallery"><li>Gallery</li></NavLink>  
                <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/about"><li>About Us</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/contact"><li>Contact Us</li></NavLink>
            </ul>
        </nav>
    </>
  )
}

export default Navbar