import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });

  function handleSetUserInput(inputFieldName, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputFieldName]: Number(newValue)
      }
    });
  }

  const results = calculateInvestmentResults(userInput);
  const inputIsValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <main className="main">
        <UserInput 
          handleSetUserInput={handleSetUserInput}
        />
        
        { !inputIsValid && <p className="center">Enter valid duration, please!</p> }
        { inputIsValid && <Result results={results} formatter={formatter} /> }
      </main>
    </>
  )
}

export default App
