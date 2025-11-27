import { useContext } from "react";
import Header from "./Header";
import { ThemeContext } from "./store/theme-context";

export default function ThemeApp() {
  const { value } = useContext(ThemeContext);
  console.log(value)
  return (

      <div id='app' className={value}>
        <Header />
        <h1>React course</h1>
        <p>A course that teaches you React form the ground up and in great depth!</p>
      </div>
  
  );
}