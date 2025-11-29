import './App.css'
import ReducerEx from './components/Section10-15/ReducerEx';
import ReducerExProvider from './components/Section10-15/context';

function App() {
  return (
    <ReducerExProvider>
      <ReducerEx />
    </ReducerExProvider>
  );
}

export default App
