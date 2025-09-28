import './App.css'
import React from 'react';

export const user = {
  name: '',
};
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
export function UserLogin({name}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    user.name = name;
  }

  return <button type='submit' onClick={(e) => handleSubmit(e)}>Set name</button>
}
export function Price() {
  const [price, setPrice] = React.useState(100);
  const handlePrice = () => {
    if (price === 0) {
      setPrice(0)
      return;
    }

    setPrice(price-25);
  }

  return (
    <div>
      <button onClick={handlePrice}>Change price</button>
      <p>Price: {price}$</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Price />
    </>
  )
}

export default App
