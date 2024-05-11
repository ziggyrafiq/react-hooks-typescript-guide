// Example: Custom Hook with TypeScript
import { useState, useEffect } from 'react';

interface UseTimerOptions {
  interval: number;
}

interface TimerResult {
  time: number;
  reset: () => void;
}

const useTimer = ({ interval }: UseTimerOptions): TimerResult => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [interval]);

  const reset = () => {
    setTime(0);
  };

  return { time, reset };
};

export default useTimer;
