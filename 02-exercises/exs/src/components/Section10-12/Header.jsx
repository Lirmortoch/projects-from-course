import { useContext } from "react";
import { ThemeContext } from "./store/theme-context";

export default function Header() {
  const { updateTheme } = useContext(ThemeContext);

  return (
    <header>
      <p>Demo website</p>
      <button onClick={updateTheme}>Toggle Theme</button>
    </header>
  );
}