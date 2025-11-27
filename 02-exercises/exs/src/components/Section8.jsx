import { useRef, useState, useImperativeHandle} from 'react';
import { createPortal } from 'react-dom';

const workouts = [
  {
    title: 'Pushups',
    description: 'Do 30 pushups',
    time: 1000 * 60 * 3,
  },
  {
    title: 'Squats',
    description: 'Do 30 squats',
    time: 1000 * 60 * 2,
  },
  {
    title: 'Pullups',
    description: 'Do 10 pullups',
    time: 1000 * 60 * 3,
  },
];
function Workout({ workout, setCompletedWorkouts }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const refTimerId = useRef(null);
  const refTimerWasStop = useRef(false);
  
  function handleStartTimer() {
    refTimerId.current = setTimeout(() => {
      setTimerExpired(true);
      setCompletedWorkouts((prevWorkouts) => prevWorkouts.concat(workout));
    }, workout.time);

    setTimerStarted(true);
  }
  function handleStopTimer() {
    clearTimeout(refTimerId.current);
    setCompletedWorkouts((prevWorkouts) => prevWorkouts.concat(workout));
    refTimerWasStop.current = true;
    setTimerExpired(true);
  }

  return (
    <section>
      {timerExpired && (
        <dialog>
          <p>{workout.title} was ended</p>
        </dialog>
      )}
      <h2>{workout.title}</h2>
      <p>{workout.description}</p>
      <button 
        onClick={timerStarted ? handleStopTimer : handleStartTimer}>
          {timerStarted ? 'Stop Timer' : 'Start Timer'}
      </button>
      {timerExpired && (<p>Timer was {refTimerWasStop.current ? 'stopped' : 'ended'}</p>)}
    </section>
  );
}
export function Workouts() {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  
  return (
    <main className='workouts'>
      <div className="workouts__wrap">
        {workouts.map((item, index) => {
          return <Workout key={index+1+`-${item.title}`} workout={item} setCompletedWorkouts={setCompletedWorkouts} />
        })}
      </div>
      
      <section className='workouts__completed'>
        <h2>Completed Workouts</h2>
        <ul>
          {completedWorkouts.map((item, i) => {
            return <li key={i+1}>{item.title}</li>
          })}
        </ul>
      </section>
    </main>
  )
}

export function CompleteInput({ labelText, ref, ...props }) {
  return (
    <fieldset>
      <label htmlFor={props.id} >{labelText}</label>
      <input ref={ref} {...props} />
    </fieldset>
  );
}
function CompleteInputEx() {
  const refName = useRef();
  const refEmail = useRef();

  function handleSaveData() {
    const name = refName.current.value;
    const email = refEmail.current.value;

    exportData.name = name;
    exportData.email = email;

    refName.current.value = '';
    refEmail.current.value = '';

    console.log(exportData);
  }

  return (
    <div>
      <CompleteInput labelText={'Name'} ref={refName} type='text' />
      <CompleteInput labelText={'Email'} ref={refEmail} type='email' />
      <button onClick={handleSaveData}>Save Data!</button>
    </div>
  );
}
const exportData = {
  email: '',
  name: '',
}

function SomeComponent() {
  const form = useRef();

  function handleClear() {
    form.current.clear();
  }

  return <Form ref={form} onReset={handleClear} />
}
function Form({ ref, onReset }) {
  const form = useRef();

  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current.reset();
      }
    }
  });

  return (
    <form ref={ref}>
      <fieldset>
        <label htmlFor='name'>Name </label>
        <input type='text' id='name'/>
      </fieldset>
      <button onClick={onReset}>Submit</button>
    </form>
  );
}

function Toast({ ref, onReset, text }) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
        onReset();
      },
      closeModal() {
        modal.current.close();
      }
    }
  });

  return (
    <dialog ref={modal}>
      <h2>{text}</h2>
    </dialog>
  );
}
function UseToast() {
  const modal = useRef();

  function handleOnReset() {
    setTimeout(() => {modal.current.closeModal()}, 3 * 1000);
  }

  return (
    <div>
      <Toast
        ref={modal}
        onReset={handleOnReset}
        text={'User been registered'}
      />
      <button onClick={() => modal.current.open()}>Open modal window</button>
    </div>
  )
}