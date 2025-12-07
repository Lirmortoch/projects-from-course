import { useEffect, useState } from "react"

export default function ProgressBar({ timer }) {
  const [time, setTime] = useState(timer * 1000);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime((prevTime) => prevTime - 10)  ;
    }, 10);

    return () => {
      clearInterval(intervalID);
    }
  }, []);


  return <progress value={time} max={timer * 1000} />;
}