import React from "react";

const CounterButton = React.lazy(() => import("mfe1/CounterButton"));
const CounterDisplay = React.lazy(() => import("mfe2/CounterDisplay"));

const App = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <CounterDisplay />
    <CounterButton />
  </React.Suspense>
);

export default App; 
