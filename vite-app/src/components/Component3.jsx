import React, { useContext } from "react";
import { counterContext } from "../context/counter";

const Component3 = () => {
  const value = useContext(counterContext);
  return <div>{value.count}</div>;
};

export default Component3;
