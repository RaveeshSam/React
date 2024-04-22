import React, { useContext } from "react";
import Component3 from "./Component3";
import { counterContext } from "../context/counter";

const Component2 = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span><Component3 /></span>
        I'm a Button
      </button>
    </div>
  );
};

export default Component2;
