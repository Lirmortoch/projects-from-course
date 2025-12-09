import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ANSWERING_TIMER = 10; // seconds
const DELAY_TIMER = 3; // seconds
const AFTER_ANSWERING = 5; // seconds

export default function Question({ question, handleSetNextQuestion }) {
  const [questionState, setQuestionState] = useState('answering');
  const [timer, setTimer] = useState(ANSWERING_TIMER);
  const [isAnsCorrect, setIsAnsCorrect] = useState(false);

  useEffect(() => {
    let timeoutTimer = ANSWERING_TIMER;
    if (questionState === 'beforeViewAnswer') {
      timeoutTimer = DELAY_TIMER;
    }
    else if (questionState === 'viewAnswer') {
      timeoutTimer = AFTER_ANSWERING;
    }

    const timeoutID = setTimeout(() => {
      setQuestionState(prevQuestionState => {
        if (prevQuestionState === 'answering') {
          setTimer(DELAY_TIMER);
          return 'beforeViewAnswer';
        }
        else if (prevQuestionState === 'beforeViewAnswer') {
          setTimer(AFTER_ANSWERING);
          return 'viewAnswer';
        }
        else {
          setTimer(ANSWERING_TIMER);
          return 'answering';
        }
      })
    }, timeoutTimer * 1000);

    return () => {
      clearTimeout(timeoutID);
    }
  }, [questionState]);

  function handleSetIsAnsCorrect(ans, correctAns) {
    setIsAnsCorrect(ans === correctAns);
  }

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
                    onClick={() => {
                      handleSetIsAnsCorrect(answer, question['correct-answer']);
                    }}
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