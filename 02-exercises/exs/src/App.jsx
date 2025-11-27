import './App.css'
import Main from './components/Section10-12/Main';
import ThemeContextProvider from './components/Section10-12/store/theme-context';

function App() {
  return (
    <ThemeContextProvider>
      <Main></Main>
    </ThemeContextProvider>
  );
}

export default App
