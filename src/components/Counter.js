import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(previousState => previousState + 1) 
  }
  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
