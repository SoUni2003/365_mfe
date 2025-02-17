import React from "react";
import { useCounterStore } from "shell/store"; 

const CounterButton = () => {
  const increment = useCounterStore((state) => state.increment);
  return <button onClick={increment}>Tăng Count</button>;
};

export default CounterButton;
