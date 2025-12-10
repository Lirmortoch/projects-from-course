import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ANSWERING_TIMER = 10; // seconds
const DELAY_TIMER = 2; // seconds
const AFTER_ANSWERING = 4; // seconds

export default function Question({ question, handleSetNextQuestion }) {
  const [questionState, setQuestionState] = useState('answering');
  const [questionAnswer, setAnswer] = useState({});

  let timer = ANSWERING_TIMER;
  if (questionState === 'beforeViewAnswer') {
    timer = DELAY_TIMER;
  }
  else if (questionState === 'viewAnswer') {
    timer = AFTER_ANSWERING;
  }

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setQuestionState(prevQuestionState => {
        if (prevQuestionState === 'answering') {
          return 'beforeViewAnswer';
        }
        else if (prevQuestionState === 'beforeViewAnswer') {
          return 'viewAnswer';
        }
        else {
          setAnswer({});
          return 'answering';
        }
      })
    }, timer * 1000);

    return () => {
      clearTimeout(timeoutID);
      if (questionState === 'viewAnswer') {
        handleSetNextQuestion();
      }
    }
  }, [questionState]);

  function handleSetAnswer(ans, correctAns, idx) {
    const answer = { ansIdx: idx, correct: ans === correctAns };
    setAnswer(idx !== undefined ? answer : { ansIdx: null, correct: false });

    setQuestionState('beforeViewAnswer');
  }

  return (
    <section id="question">
      <div id="quiz">
        <ProgressBar timer={timer} clsName={questionState === 'beforeViewAnswer' ? 'answered' : ''} />
        <h2>{question.text}</h2>
        <ul id="answers">
          {
            question.answers.map((answer, idx) => {
              let ansClassName = '';
              let isDisabled = false;
              
              if (questionState === 'beforeViewAnswer') {
                if (questionAnswer.ansIdx === idx) {
                  ansClassName = 'selected';
                }
                else {
                  isDisabled = true; 
                }
              }
              if (questionState === 'viewAnswer') {
                if (questionAnswer.ansIdx === idx) {
                  ansClassName = questionAnswer.correct ? 'correct' : 'wrong';
                }
                else {
                  isDisabled = true; 
                }
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