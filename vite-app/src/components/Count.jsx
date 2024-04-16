import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    // function decrement() {
    //     setCount(prevCount => prevCount - 1)
    // }

    // function increment() {
    //     setCount(prevCount => prevCount + 1)
    // }

  return (
    <div>
        <button onClick={() => {setCount(count - 1)}}>Decrement</button>
        <span> {count} </span>
        <button onClick={() => {setCount(count + 1)}}>Increment</button>
    </div>
  )
}

export default Count