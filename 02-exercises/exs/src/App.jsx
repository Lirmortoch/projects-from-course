import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const userData = {
  firstName: 'Maximilian',
  lastName: 'Schwarzmüller',
  title: 'Instructor',
};

export function MainGoal() {
  return (
    <h2>My main goal is find the job</h2>
  );
}
export function User({firstName, lastName, title}) {
  return (
    <div id='user'>
      <h2>{firstName} {lastName}</h2>
      <p>{title}</p>
    </div>
  );
}
export function CourseGoal({title, description}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
export function Card({children, name, lastName, description}) {
  return (
    <section className={name+' '+lastName+' people'}>
      <h2>{name} {lastName}</h2>
      <p>{name} {description}</p>
      <a href='mailto:#'>Email {name}</a>
    </section>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name='Maria' lastName='Brown' description=' Maria is a professor of Computer Science at the University of Illinois.'/>
    </>
  )
}

export default App
