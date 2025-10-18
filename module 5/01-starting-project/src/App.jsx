import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [iniInvest, setIniInvest] = useState(0);
  const [annInvest, setAnnInvest] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleIniInvestChange(e) {
    setIniInvest(e.target.value);
  }
  function handleAnnInvestChange(e) {
    setAnnInvest(e.target.value);
  }
  function handleExpectedReturnChange(e) {
    setExpectedReturn(e.target.value);
  }
  function handleDurationChange(e) {
    setDuration(e.target.value);
  }
  
  const propObject = {
    initialInvestment: Number(iniInvest),
    annualInvestment: Number(annInvest),
    expectedReturn: Number(expectedReturn),
    duration: Number(duration),
  }
  const results = calculateInvestmentResults(propObject);

  return (
    <>
      <Header />
      <main className="main">
        <UserInput 
          handleIniInvestChange={handleIniInvestChange}  
          handleAnnInvestChange={handleAnnInvestChange}
          handleExpectedReturnChange={handleExpectedReturnChange}
          handleDurationChange={handleDurationChange}
        />
        
        <Result results={results} formatter={formatter} />
      </main>
    </>
  )
}

export default App
