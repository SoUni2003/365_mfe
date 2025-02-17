import React from "react";
import { useCounterStore } from "shell/store";

const CounterDisplay = () => {
  const count = useCounterStore((state) => state.count);
  return <h2>Giá trị Count: {count}</h2>;
};

export default CounterDisplay;
