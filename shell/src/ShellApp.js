import React, { useEffect, useRef } from "react";
import { useCounterStore } from "./store";

const ShellApp = () => {
  const iframeRef = useRef(null);
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "INCREMENT_COUNT") {
        increment();
      }
    };

    const handleCustomEvent = (event) => {
      if (event.detail === "INCREMENT_COUNT") {
        increment();
      }
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("mfe2-event", handleCustomEvent);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("mfe2-event", handleCustomEvent);
    };
  }, [increment]);

  return (
    <div>
      <h1>Shell Application</h1>
      <p>Global Count: {count}</p>
      
      <iframe ref={iframeRef} src="http://localhost:3001" title="MFE1" width="600" height="400" />
      <script src="http://localhost:3002/mfe2.js"></script>
      <mfe-two></mfe-two>
    </div>
  );
};

export default ShellApp;
