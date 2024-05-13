import React, { useEffect, useState } from 'react'
import {add} from '../Redux/cartSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
      const fetchProduct = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProduct(data)
      }
      fetchProduct()
    }, [])
    
    const handleAdd = (product) => {
      dispatch(add(product))
    }

  return (
    <div className='productWrapper'>
        {
            product.map((product) => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={() => handleAdd(product)}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home