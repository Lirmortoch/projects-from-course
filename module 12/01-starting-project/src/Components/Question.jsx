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

  function handleSetIsAnsCorrect() {
    
  }

  return (
    <section id="last-try">
      <h2>{question.text}</h2>

      <ul>
        {
          question.answers.map((answer, idx) => {
            return (
              <li key={idx}>
                <button 
                  onClick={() => handleSetChoice(question.id, answer, question['right-answer'])}
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