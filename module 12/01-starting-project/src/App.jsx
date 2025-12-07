import { useState } from "react";
import quizLogo from './assets/quiz-logo.png'
import questions from "./questions";
import Question from "./Components/Question";

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState();
  const [question, setQuestion] = useState(0);
  const [end, setEnd] = useState(false);

  function handleSetChoice(questionID, answer, correctAns, handleSetIsAnsCorrect) {
    const ans = {
      questionID,
      answer
    }
    
    handleSetIsAnsCorrect(answer, correctAns);
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

      <Question question={questions[question]} handleSetChoice={handleSetChoice} />
    </main>
  )
}

export default App;
