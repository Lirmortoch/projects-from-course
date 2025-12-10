import { useState } from "react";
import quizLogo from './assets/quiz-logo.png'
import questions from "./questions";
import Question from "./Components/Question";
import Result from "./Components/Result";

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [question, setQuestion] = useState(0);
  const [end, setEnd] = useState(false);

  function handleSetChoice(answer) {
    setSelectedQuestions(prevQuestions => prevQuestions.concat(answer));    
  }

  function handleSetNextQuestion() {
    setQuestion(prevQuestion => {
      if (prevQuestion < questions.length - 1) return prevQuestion + 1;
      else setEnd(true);
    });
  }

  let renderElem;

  if (!end) {
    renderElem = <Question question={questions[question]} handleSetChoice={handleSetChoice} handleSetNextQuestion={handleSetNextQuestion} />;
  }
  else {
    renderElem = <Result questions={questions} answers={selectedQuestions} />
  }

  return (
    <main>
      <header>
        <img src={quizLogo} alt="Project logo" />
        <h1>React Quiz</h1>
      </header>

      { renderElem }
    </main>
  )
}

export default App;
