import { useState } from "react";

const ANSWERING_TIMER = 10; // seconds
const DELAY_TIMER = 3; // seconds

export default function Question({ question, handleSetChoice }) {
  const [questionState, setQuestionState] = useState('answering');
  const [isTimerEnd, setIsTimerEnd] = useState(false);
  const [isAnsCorrect, setIsAnsCorrect] = useState(false);

  let ansClassName;
  let isDisabled = false;

  if (questionState === 'viewAnswer') {
    ansClassName = isAnsCorrect ? 'correct' : 'wrong';
    isDisabled = true;
  }

  function handleSetIsAnsCorrect(answer, correctAns) {
    setIsAnsCorrect(answer === correctAns);
  }

  return (
    <section id="question">
      <h2>{question.text}</h2>

      <ul id="answers">
        {
          question.answers.map((answer, idx) => {
            return (
              <li key={idx} className="answer">
                <button 
                  onClick={() => handleSetChoice(question.id, answer, question['right-answer'], handleSetIsAnsCorrect)}
                  className={ansClassName}
                  disabled={isDisabled}>
                    {answer}
                  </button>
              </li>
            );
          })
        }
      </ul>
    </section>
  )
}