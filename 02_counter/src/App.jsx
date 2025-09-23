import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 5;

  const addValue = () => {
    // counter ++;
    if (counter < 20) setCounter(counter + 1);
    console.log("value added", counter);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
    console.log("value removed", counter);
  };

  return (
    <>
      <h1>React with vite</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <br />
      <br />
      <footer>{counter}</footer>
    </>
  );
}

export default App;
