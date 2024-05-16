"use client"
import React, { useState } from 'react'

const page = () => {
    const [count, setCount] = useState(0)
    console.log("Hey...")

  return (
    <>
      <h1 className="m-2 font-bold text-center text-4xl">About Page</h1>
      <div className='text-center m-1'>
        <p>Count: {count}</p>
        <button className='p-1 m-1 bg-slate-400 rounded-md hover:bg-slate-500' onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </>
  )
}

export default page