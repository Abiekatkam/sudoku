import { formatTime } from "@/lib/utils";
import React, { useEffect } from "react";

const Timer = ({ isPaused, isActive, resetKey, time, setTime }) => {
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

  return (
    <span className="font-semibold text-slate-400">{formatTime(time)}</span>
  );
};

export default Timer;
