import summaryLogo from '../assets/quiz-complete.png';

export default function Result({ questions, answers }) {
  const skipped = ((answers.filter(ans => ans.ansIdx === null).length / questions.length) * 100).toFixed(0);
  const correct = ((answers.filter(ans => ans.correct).length / questions.length) * 100).toFixed(0);
  const wrong = ((answers.filter(ans => !ans.correct).length / questions.length) * 100).toFixed(0);

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
    </section>
  );
}