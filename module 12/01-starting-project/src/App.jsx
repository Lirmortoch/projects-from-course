import { useState } from "react";
import quizLogo from './assets/quiz-logo.png'

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [question, setQuestion] = useState(0);
  const [end, setEnd] = useState(false);

  function handleSetChoice(questionID, answer, correctAns) {
    const ans = {
      questionID,
      answer
    }

    setSelectedQuestions(prevQuestions => prevQuestions.concat(ans));
  }

  function handleSetQuestion() {

  }

  return (
    <main>
      <header>
        <img src={quizLogo} alt="Project logo" />
        <h1>React Quiz</h1>
      </header>
    </main>
  )
}

export default App;
