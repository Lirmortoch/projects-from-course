export default function Question({ question, handleSetChoice }) {
  return (
    <section id="last-try">
      <h2>{question.text}</h2>

      <ul>
        {
          question.answers.map((answer, idx) => {
            return (
              <li key={idx}>
                <button onClick={() => handleSetChoice(question.id, answer, question['right-answer'])}>{answer}</button>
              </li>
            );
          })
        }
      </ul>
    </section>
  )
}