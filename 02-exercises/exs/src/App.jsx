import './App.css'

export const user = {
  email: '',
  password: '',
  loggedIn: false,
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
<<<<<<< HEAD
export function UserLogin({email, password}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    user.email = email;
    user.password = password;
    user.loggedIn = true;

    console.log(user);
  }

  return <button type='submit' onClick={(e) => handleSubmit(e)}>Add</button>
=======
export function Card({children, name, lastName, description}) {
  return (
    <section className={name+' '+lastName+' people'}>
      <h2>{name} {lastName}</h2>
      <p>{name} {description}</p>
      <a href='mailto:#'>Email {name}</a>
    </section>
  );
>>>>>>> 01-starting-project
}

function App() {
   
  return (
    <>
<<<<<<< HEAD
      <form className='input'>
        <input type='text'/>
        <input type='password'/>
        <UserLogin email='lji@gmail.com' password='12345@!#!gsda'/>
      </form>
=======
      <Card name='Maria' lastName='Brown' description=' Maria is a professor of Computer Science at the University of Illinois.'/>
>>>>>>> 01-starting-project
    </>
  )
}

export default App
