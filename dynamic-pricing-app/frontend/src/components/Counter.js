import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('wss://flask-socketio-railway-backend-production.up.railway.app');
// const socket = io('http://localhost:5000');

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        socket.on('update_count', (newCount) => {
            // console.log('Received new count:', newCount);
            setCount(newCount['value']);
        });

        return () => {
            socket.off('update_count');
        };
    }, []);

    const incrementCount = () => {
        socket.emit('increment_count');
    };

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default Counter;