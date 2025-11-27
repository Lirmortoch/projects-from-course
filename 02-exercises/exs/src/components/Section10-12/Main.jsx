import { useState, useContext } from "react";
import Header from "./Header";

export default function ThemeApp() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <div id='app'>
      <Header />

      <h1>React course</h1>
      <p>A course that teaches you React form the ground up and in great depth!</p>
    </div>
  );
}