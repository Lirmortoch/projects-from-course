import { useContext } from "react";
import { exContext } from "./context";

export default function ReducerEx() {
  const { val, increaseValue } = useContext(exContext);

  return (
    <div>
      <button onClick={increaseValue}>Increase Value</button>
      <p>{val}</p>
    </div>
  );
}