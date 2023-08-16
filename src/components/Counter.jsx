import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  function decreaseCount() {
    setCount(count - 1);
  }
  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button type="button" onClick={decreaseCount}>
        -
      </button>
      <button type="button" onClick={increaseCount}>
        +
      </button>
    </div>
  );
};

export default Counter;
