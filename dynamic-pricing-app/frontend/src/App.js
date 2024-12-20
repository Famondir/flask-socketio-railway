import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Counter from './components/Counter';

// const socket = io('https://dynamicpricing-production.up.railway.app/');
const socket = io('http://localhost:5000');

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    socket.on('update_value', (newValue) => {
      setValue(newValue);
    });

    return () => {
      socket.off('update_value');
    };
  }, []);

  const incrementValue = () => {
    socket.emit('increment_value');
  };

  return (
    <div>
      <h1>Dynamic Pricing App</h1>
      <Counter value={value} onIncrement={incrementValue} />
    </div>
  );
}

export default App;