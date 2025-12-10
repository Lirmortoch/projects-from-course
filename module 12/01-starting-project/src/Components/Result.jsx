import summaryLogo from '../assets/quiz-complete.png';

export default function Result({ questions, answers }) {
  const skipped = ((answers.filter(ans => Object.keys(ans).length === 0).length / questions.length) * 100).toFixed(0);
  const correct = ((answers.filter(ans => ans.correct).length / questions.length) * 100).toFixed(0);
  const wrong = ((answers.filter(ans => !ans.correct && Object.keys(ans).length !== 0).length / questions.length) * 100).toFixed(0);

  console.log(answers);

  return (
    <section id="summary">
      <div>
        <img src={summaryLogo} alt='summary logo' />
        <h2>Quiz Completed</h2>
      </div>

      <div id='summary-stats'>
        <p>
          <span className='number'>{skipped}%</span>
          <span className='text'>Skipped</span>
        </p>
        <p>
          <span className='number'>{correct}%</span>
          <span className='text'>Answered Correctly</span>
        </p>
        <p>
          <span className='number'>{wrong}%</span>
          <span className='text'>Answered Incorrectly</span>
        </p>
      </div>

      <ol>
        {answers.map((item, idx) => {
          let ansClassName = 'user-answer';
          const isSkipped = Object.keys(item).length === 0;
          
          if (isSkipped) {
            ansClassName += ' skipped';
          }
          else {
            ansClassName += item.correct ? ' correct' : ' wrong';
          }

          return (
            <li key={item.questionID + '-' + idx}>
              <h3>{idx + 1}</h3>
              <p className='question'>{questions[idx].text}</p>
              <p className={ansClassName}>{isSkipped ? 'Question was skipped' : questions[idx].answers[item.ansIdx]}</p>
            </li>
          )
        })}
      </ol>
    </section>
  );
}