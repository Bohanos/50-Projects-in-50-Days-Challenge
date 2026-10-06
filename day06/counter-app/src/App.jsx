import { React} from "react";
import { useState } from "react";
import DisplayArea from "./components/DisplayArea";
import Buttons from "./components/Buttons";


export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <DisplayArea count={count} />
      <Buttons increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
}