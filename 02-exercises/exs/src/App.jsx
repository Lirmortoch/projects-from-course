import './App.css'
import { useState } from 'react';

export const user = {
  name: '',
};
export const userData = {
  firstName: 'Maximilian',
  lastName: 'Schwarzmüller',
  title: 'Instructor',
};
export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

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
  const [price, setPrice] = useState(100);
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
export function ShowAlert() {
  const [isShow, setIsShow] = useState(false);
  
  const handlerShow = () => {
    setIsShow(true);
  }
  const handlerHide = () => {
    setIsShow(false);
  }

  let elem = <div><button onClick={handlerShow}>Delete</button></div>;

  if (isShow) {
    elem = (
      <div id='alert'>
        <h3>Are you sure?</h3>
        <p>These changes can't be reverted</p>
        <button onClick={handlerHide}>Proceed</button>
      </div>
    )
  }

  return (
    <>
      {elem}
    </>
  );
}
export function ToggleStyle() {
  const [style, setStyle] = useState('');

  const handlerToggleStyle = () => {
    if (style === '') setStyle('active');
    else setStyle('');
  }

  return (
    <div>
      <p className={style}>Style me!</p>
      <button onClick={handlerToggleStyle}>Toggle Style</button>
    </div>
  )
}
export function ShowListDynamically() {
  return (
    <ul>
      {DUMMY_TODOS.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  )
}

function App() {
  return (
    <>
      <ShowListDynamically/>
    </>
  )
}

export default App
