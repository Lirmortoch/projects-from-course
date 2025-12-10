import summaryLogo from '../assets/quiz-complete.png';

const getStat = (arr1, arr2) => {
  return ((arr1.length / arr2.length) * 100).toFixed(0);
}

export default function Result({ questions, answers }) {
  const skipped = getStat(answers.filter(ans => ans.questionID === null), questions);
  const correct = getStat(answers.filter(ans => ans.correct), questions);
  const wrong = getStat(answers.filter(ans => !ans.correct && ans.questionID !== null), questions);

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
          const isSkipped = item.questionID == null;
          
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