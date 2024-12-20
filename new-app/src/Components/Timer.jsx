import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [inp, setInp] = useState({ hours: '', minutes: '', seconds: '' });
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (minutes > 0 || hours > 0) {
              setMinutes((prevMinutes) => {
                if (prevMinutes === 0 && hours > 0) {
                  setHours((prevHours) => prevHours - 1);
                  return 59;
                }
                return prevMinutes > 0 ? prevMinutes - 1 : 0;
              });
              return 59;
            } else {
              setIsRunning(false);
              clearInterval(interval);
              alert("Vaxt bitti!"); // Alert burada yalnız bir dəfə göstərilir
              return 0;
            }
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, hours]);

  const startTimer = () => {
    if (
      (inp.hours !== '' || inp.minutes !== '' || inp.seconds !== '') &&
      (Number(inp.hours) >= 0 && Number(inp.minutes) >= 0 && Number(inp.seconds) >= 0)
    ) {
      setHours(Number(inp.hours));
      setMinutes(Math.min(Number(inp.minutes), 59));
      setSeconds(Math.min(Number(inp.seconds), 59));
      setIsRunning(true);
    } else {
      console.log("Input boşdur və ya düzgün deyil");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInp({
      ...inp,
      [name]: value.replace(/[^0-9]/g, ''),
    });
  };

  return (
    <div>
      <div>
        <input
          type="number"
          name="hours"
          placeholder="Saat"
          value={inp.hours}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="minutes"
          placeholder="Dəqiqə"
          value={inp.minutes}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="seconds"
          placeholder="Saniyə"
          value={inp.seconds}
          onChange={handleInputChange}
        />
      </div>
      <button className='timer-button' onClick={startTimer}>Start</button>
      <h1>
        {(hours < 10 ? "0" : "") + hours}:
        {(minutes < 10 ? "0" : "") + minutes}:
        {(seconds < 10 ? "0" : "") + seconds}
      </h1>
    </div>
  );
};

export default Timer;
