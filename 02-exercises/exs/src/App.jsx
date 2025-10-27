import './App.css'
import { useState } from 'react';
import ReactIcon from './assets/react.svg'

const user = {
  name: '',
};
const userData = {
  firstName: 'Maximilian',
  lastName: 'Schwarzmüller',
  title: 'Instructor',
};
const DUMMY_TODOS = [
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
export function Summary({text}) {
  const textF = `<p>${text}</p>`;
  return (
    <>
      <h1>Summary</h1>
      <p>{textF}</p>
    </>
  )
}
export function Input({ richText, placeHolder, inputType}) {
  let input = (<input type={inputType} placeholder={placeHolder} />);

  if (richText) {
    input = (<textarea placeholder={placeHolder} cols={20}
    rows={2}></textarea>);
  }
  console.log(input)
  return (
    <>{input}</>
  );
}
export function Button({ children, mode = 'filled', Icon = null, ...props }) {
  let iconElem = Icon;
  let buttonCssClasses = `button ${mode}-button`;

  if (Icon !== null) {
    iconElem = (<span className='button-icon'>
      <img src={iconElem}/>
    </span>);
    buttonCssClasses += ' icon-button';
  }

  if (props.className) {
    buttonCssClasses += ` ${props.className}`;
  }

  return (
    <button {...props} className={buttonCssClasses}>
      {iconElem}
      <span>{children}</span>
    </button>
  )
}

// module 4 exercise 24
export function Review({ feedback, name }) {
  return (
    <div id='draft'>
      <h2>Your feedback</h2>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{name}</figcaption>
      <button>Save</button>
    </div>
  )
}
export function ReviewInput() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');

  function handleFeedback(e) {
    setFeedback(e.target.value);
  }
  function handleName(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <div id='feedback'>
        <h2>Please share some feedback</h2>
        <form onClick={(e) => e.preventDefault()}>
          <fieldset>
            <label htmlFor='input-feedback'>Your Feedback</label>
            <textarea name='input-feedback' id='input-feedback' onChange={handleFeedback} ></textarea>
          </fieldset>
          <fieldset>
            <label htmlFor='input-name'>Your Name</label>
            <input type='text' name='input-name' id='input-name' onChange={handleName} />
          </fieldset>
        </form>
      </div>

      <Review feedback={feedback} name={name} />
    </div>
  )
}

export function DynamicStyling() {
  const [myColor, setMyColor] = useState('white');
  function handleYesBtn() {
    setMyColor('green');
  }
  function handleNoBtn() {
    setMyColor('red');
  }
  return (
    <div>
      <h1 style={{
        color: myColor,
      }}>Header!!!</h1>
      <div>
        <button onClick={handleYesBtn}>Yes</button>
        <button onClick={handleNoBtn}>No</button>
      </div>
    </div>
  )
}
export function DynamicStylingHighlight() {
  const [color, setColor] = useState('');
  
  function handleYes() {
    setColor('highlight-green');
  }
  function handleNo() {
    setColor('highlight-red');
  }

  return (
    <div>
      <h1 className={color}>CSS is great</h1>
      <div>
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </div>
    </div>
  );
}
export function DynamicStylingThird() {
  const [myColor, setMyColor] = useState('white');
  function handleToggleStyle() {
    setMyColor((prevColor) => prevColor === 'red' ? 'white' : 'red');
  }
  return (
    <div>
      <p style={{
        color: myColor,
      }}>Style me!</p>
      <div>
        <button onClick={handleToggleStyle}>Toggle style</button>
      </div>
    </div>
  )
}

export function Debug({ arr }) {
  return (
    <ul>
      {arr.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}

function App() {
  const arr = [
    {
      name: 'bob',
      id: 1,
    },
    {
      name: 'john',
      id: 2,
    },
    {
      name: 'aks',
      id: 3,
    }
  ];
  return (
    <Debug arr={arr} />
  );
}

export default App
