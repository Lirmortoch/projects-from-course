import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";

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
      
      </main>
    </>
  )
}

export default App
