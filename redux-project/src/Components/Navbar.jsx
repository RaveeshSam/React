import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <span style={{fontWeight:"bold"}}>Redux Tutorial</span>
        <div>
            <Link className='navLink' to={'/'}>Home</Link>
            <Link className='navLink' to={'/cart'}>Cart</Link>
            <span className='navLink'>Items: 0</span>
        </div>
    </div>
  )
}

export default Navbar