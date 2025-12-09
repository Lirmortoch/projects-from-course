import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ANSWERING_TIMER = 10; // seconds
const DELAY_TIMER = 2; // seconds
const AFTER_ANSWERING = 4; // seconds

export default function Question({ question, handleSetNextQuestion }) {
  const [questionState, setQuestionState] = useState('answering');
  const [timer, setTimer] = useState(ANSWERING_TIMER);
  const [questionAnswer, setAnswer] = useState({});

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

  function handleSetAnswer(ans, correctAns, idx) {
    const answer = { ansIdx: idx, correct: ans === correctAns };
    setAnswer(idx !== undefined ? answer : { ansIdx: null, correct: false });
  }

  let isDisabled = questionState !== 'answering';

  return (
    <section id="question">
      <div id="quiz">
        <ProgressBar timer={timer} />
        <h2>{question.text}</h2>
        <ul id="answers">
          {
            question.answers.map((answer, idx) => {
              let ansClassName = '';
              if (questionAnswer.ansIdx === idx) {
                ansClassName = 'selected';
              }
              return (
                <li key={idx} className="answer">
                  <button
                    onClick={() => {
                      handleSetAnswer(answer, question['correct-answer'], idx);
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