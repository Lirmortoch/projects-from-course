import summaryLogo from '../assets/quiz-complete.png';

export default function Result({ questions, answers }) {
  const skipped = (questions.length / answers.filter(ans => ans.ansIdx === null)) * 100;
  const correct = (questions.length / answers.filter(ans => ans.correct)) * 100;
  const wrong = (questions.length / answers.filter(ans => !ans.correct)) * 100;

  return (
    <section id="summary">
      <div>
        <img src={summaryLogo} alt='summary logo' />
        <h2>Quiz Completed</h2>
      </div>

      <div id='summary-stats'>
        <p>
          <span></span>
        </p>
      </div>
    </section>
  );
}