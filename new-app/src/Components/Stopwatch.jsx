import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className='stop-watch-buttons'>
      <h1>{seconds}</h1>
      <div>
      <button className='stop-watch-button' onClick={start}>Başlat</button>
      <button className='stop-watch-button' onClick={stop}>Dayandır</button>
      <button className='stop-watch-button' onClick={reset}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Stopwatch;