import { useState } from "react";
import Card from "./components/Card";
import Count from "./components/Count";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Api from "./components/Api";
import Component1 from "./components/Component1";
import { counterContext } from "./context/counter"
import Memo from "./components/Memo";

function App() {
  // const users = [
  //   { id:0, name:"James", age:35, },
  //   { id:1, name:"Karim", age:26, },
  //   { id:2, name:"Bruno", age:45, },
  //   { id:3, name:"Mike", age:24, },
  //   { id:4, name:"Bily", age:28, },
  // ];
  
// const [state, setState] = useState(true)

// const handleClick = () => {
//   alert("Button is Clicked")
// }

// const handleMouseOver = () => {
//   alert("Mouse on Box")
// }

// const [name, setName] = useState("React")

// const handleChange = (e) => {
//   setName(e.target.value)
// }

// const [count, setCount] = useState(0)

  return (
    <>
      {/* <counterContext.Provider value={{count, setCount}}> */}
      <Navbar /> <br />
      <Memo />
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => {setCount((count) => count + 1)}}>Click Me</button><br /> */}
      {/* <Component1 /> */}
      {/* <button onClick={handleClick}>Click Me</button> <br/> */}
      {/* <div className="box" onMouseOver={handleMouseOver}>
        It is a Box
      </div> <br /> */}
      {/* <input type="text" value={name} onChange={handleChange} /> */}
      {/* <p>{name}</p> */}
      {/* <Counter /> <br /> */}
      {/* {state && <Count />}
      <button onClick={() => setState(!state)}>Toggle</button> <br />
      {state ? <Count /> : "Nothing to Display"} <br /> */}
      {/* <div className="cards">
        <Card title="Card1" price="$ 123" />
        <Card title="Card2" price="$ 456" />
        <Card title="Card3" price="$ 789" />
      </div> <br /> */}
      {/* <Api /> <br /> */}
      {/* <User users={users} /> <br /> */}
      <Footer />
      {/* </counterContext.Provider> */}
    </>
  )
}

export default App;
