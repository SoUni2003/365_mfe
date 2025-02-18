import React from "react";

const CounterButton = () => {
  const sendMessage = () => {
    window.parent.postMessage({ type: "INCREMENT_COUNT" }, "*");
  };

  return <button onClick={sendMessage}>Tăng Count</button>;
};

export default CounterButton;
