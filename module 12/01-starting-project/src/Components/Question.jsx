import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ANSWERING_TIMER = 10; // seconds
const DELAY_TIMER = 3; // seconds
const AFTER_ANSWERING = 5; // seconds

export default function Question({ question }) {
  const [questionState, setQuestionState] = useState('answering');
  const [timer, setTimer] = useState(ANSWERING_TIMER);

  useEffect(() => {
    let timer = ANSWERING_TIMER;
    if (questionState === 'beforeViewAnswer') {
      timer = DELAY_TIMER;
    }
    else if (questionState === 'viewAnswer') {
      timer = AFTER_ANSWERING;
    }

    const timeoutID = setTimeout(() => {

    }, timer * 1000);

    return () => {
      // setTimer();
      clearTimeout(timeoutID);
    }
  }, [])

  let ansClassName;
  let isDisabled = questionState !== 'answering';

  if (questionState === 'beforeViewAnswer') {
    ansClassName = 'selected';
  }
  else if (questionState === 'viewAnswer') {
    ansClassName = isAnsCorrect ? 'correct' : 'wrong';
  }

  return (
    <section id="question">
      <div id="quiz">
        <ProgressBar timer={timer} />
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