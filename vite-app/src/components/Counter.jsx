import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)
    const num = useRef(0)
    const btnRef = useRef()

    // 1. Persistent Value
    useEffect(() => {
        num.current = num.current + 1
      console.log("Re-Rendering...")
      console.log(`Num is ${num.current}`)
    })
    
    // 2. DOM Manipulation
    useEffect(() => {
      console.log("First Rendering..")
      btnRef.current.style.backgroundColor = "aqua"
    }, [])
    

  return (
    <div>
        <p>{value}</p>
        <button ref={btnRef} onClick={() => {setValue(value + 1)}}>Click Me</button><br/>
        <button onClick={() => {btnRef.current.style.display = "none"}}>Hide</button><span> </span>
        <button onClick={() => {btnRef.current.style.display = "block"}}>Show</button>
    </div>
  )
}

export default Counter