import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../Redux/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <div>
      {
        cartItems.map((item) => (
          <div className='cart' key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button className='rbtn' onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart