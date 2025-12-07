import { useState } from "react";
import ProgressBar from "./ProgressBar";

const ANSWERING_TIMER = 10; // seconds
const DELAY_TIMER = 3; // seconds
const AFTER_ANSWERING = 5; // seconds

export default function Question({ question }) {
  const [questionState, setQuestionState] = useState('answering');
  const [isTimerEnd, setIsTimerEnd] = useState(false);
  const [isAnsCorrect, setIsAnsCorrect] = useState(false);

  let ansClassName;
  let isDisabled = questionState !== 'answering';
  let timer = ANSWERING_TIMER;

  if (questionState === 'beforeViewAnswer') {
    ansClassName = 'selected';
    timer = DELAY_TIMER;
  }
  else if (questionState === 'viewAnswer') {
    ansClassName = isAnsCorrect ? 'correct' : 'wrong';
    timer = AFTER_ANSWERING;
  }

  function handleSetIsAnsCorrect(answer, correctAns) {
    setIsAnsCorrect(answer === correctAns);
  }

  return (
    <section id="question">
      <div id="quiz">
        {/* <ProgressBar timer={timer} /> */}
        <h2>{question.text}</h2>
        <ul id="answers">
          {
            question.answers.map((answer, idx) => {
              return (
                <li key={idx} className="answer">
                  <button
                    onClick={() => {}}
                    className={ansClassName}
                    disabled={isDisabled}>
                      {answer}
                    </button>
                </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  )
}