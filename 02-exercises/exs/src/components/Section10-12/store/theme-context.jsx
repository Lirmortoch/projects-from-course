import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
  value: 'dark',
  updateTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState({
    value: 'dark',
  });

  function handleSetTheme() {
    setTheme(prevTheme => {
      const updatedValue = prevTheme.value === 'dark' ? 'light' : 'dark';
      return {
        value: updatedValue,
      }
    });
  }

  const ctxValue = {
    value: theme.value,
    updateTheme: handleSetTheme,
  }

  return <ThemeContext.Provider value={ctxValue}>
    {children}
  </ThemeContext.Provider>
  }