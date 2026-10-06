import react from "react";
import "../App.css";

export default function Buttons({ increment, decrement, reset }) {
  return (
    <div className="buttons">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}