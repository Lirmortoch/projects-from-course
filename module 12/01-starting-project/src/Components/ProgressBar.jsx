import { useEffect, useState } from "react"

export default function ProgressBar({ timer, clsName }) {
  const duration = timer * 1000;
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);

    const intervalID = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) return duration;
        return prevTime - 10;
      })  ;
    }, 10);

    return () => {
      clearInterval(intervalID);
    }
  }, [timer]);


  return <progress value={time} max={duration} className={clsName} />;
}