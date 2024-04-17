import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    // useEffect Syntax
    // useEffect(() => {
    //   // Side Effect code that want to run
    //   return () => {
    //     // Optional Retun Function -> Cleanup Function
    //   }
    // }, []) // The Dependancy Array

    
    // 1. No Dependancy -> Whole Component -> Runs on Every Render
    useEffect(() => {
      console.log("Rendering Component")
    })

    // 2. Empty Dependancy -> Whole Component - Runs on First Render
    useEffect(() => {
      console.log("Count Mounted")
      
      return () => {
        console.log("Count Unmouted")
      }
    }, [])

    // 3. With Dependancy -> When value is changed
    useEffect(() => {
      console.log("Count Updated", count)

      return () => {
        console.log("Count Cleanup", count)
      }
    }, [count])
    

  return (
    <div>
        <button onClick={() => {setCount(count - 1)}}>Decrement</button>
        <span> {count} </span>
        <button onClick={() => {setCount(count + 1)}}>Increment</button>
    </div>
  )
}

export default Count