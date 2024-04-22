import React, { useMemo, useState } from "react";

const num = new Array(20000000).fill(0).map((_, i) => {
    return {
        index: i,
        isSelected: i === 19999900
    }
})

const Memo = () => {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState(num)

//   const selectedItem = items.find((item) => item.isSelected) // Expensive Calculation
  const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items])

  return (
    <>
      <h1>Number of Items : {count}</h1>
      <h1>Selected Item : {selectedItem.index}</h1>
      <button onClick={() => {
        setCount(count+1);
        if(count == 15) {
            setItems(
                new Array(30000000).fill(0).map((_, i) => {
                    return {
                        index: i,
                        isSelected: i === 29999900
                    }
                })
            )
        }
        }}>Click Me</button>
      <br />
    </>
  )
}

export default Memo;
