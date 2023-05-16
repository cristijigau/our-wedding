import React, { useState, useEffect } from 'react';
import './index.scss';

const COUNTDOWN_TARGET = new Date('2023-10-20T18:00:00');

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const zile = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const ore = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const secunde = Math.floor((totalTimeLeft / 1000) % 60);
  return { zile, ore, minute, secunde };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown">
      <div className="content">
        {Object.entries(timeLeft).map(el => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label"> {label} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
