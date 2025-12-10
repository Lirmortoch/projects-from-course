import { useState } from "react";
import quizLogo from './assets/quiz-logo.png'
import questions from "./questions";
import Question from "./Components/Question";

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [question, setQuestion] = useState(0);
  const [end, setEnd] = useState(false);

  function handleSetChoice(questionID, answer) {
    const ans = {
      questionID,
      answer
    }
    
    setSelectedQuestions(prevQuestions => prevQuestions.concat(ans));    
  }

  function handleSetNextQuestion() {
    setQuestion(prevQuestion => {
      if (prevQuestion < questions.length) return prevQuestion + 1;
      else return 0;
    });
  }

  return (
    <main>
      <header>
        <img src={quizLogo} alt="Project logo" />
        <h1>React Quiz</h1>
      </header>

      <Question question={questions[question]} handleSetChoice={handleSetChoice} handleSetNextQuestion={handleSetNextQuestion} />
    </main>
  )
}

export default App;
