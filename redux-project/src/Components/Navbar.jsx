import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state) => state.cart)

  return (
    <div className='nav'>
        <span style={{fontWeight:"bold"}}>Redux Tutorial</span>
        <div>
            <Link className='navLink' to={'/'}>Home</Link>
            <Link className='navLink' to={'/cart'}><i className='fa-solid fa-cart-shopping'></i></Link>
            <span className='navLink'>Items: {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar