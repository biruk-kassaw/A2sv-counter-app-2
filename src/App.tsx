import React, { useState, useEffect, useRef } from 'react';
import './style.css';

function App() {
  // useState Hook to manage the counter value
  const [counter, setCounter] = useState(0);

  // useEffect Hook to update the document title
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);

  // useRef Hook to access the DOM button element
  const buttonRef = useRef(null);

  // Function to increment the counter
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="App container">
      <h1 className="m-2">Counter App with Hooks</h1>
      <p className="m-2">Counter: {counter}</p>
      <button
        className="btn btn-primary m-2"
        ref={buttonRef}
        onClick={increment}
      >
        Increment
      </button>
      <button className="btn btn-secondary" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
