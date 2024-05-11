// Example: useState Hook with TypeScript
import React, { useState } from 'react';

interface CounterProps {
  initialValue: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{`Count: ${count}`}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
