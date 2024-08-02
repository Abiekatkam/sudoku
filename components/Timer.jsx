import React, { useState, useEffect } from "react";

const Timer = ({ isPaused, isActive, resetKey  }) => {
  const [time, setTime] = useState(0); // time in seconds

  useEffect(() => {
    if (resetKey !== null) {
      setTime(0);
    }
  }, [resetKey]);

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime < 3599 ? prevTime + 1 : prevTime));
      }, 1000);
    } else if (isPaused) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused, isActive]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return <span className="font-semibold text-slate-400">{formatTime(time)}</span>;
};

export default Timer;
