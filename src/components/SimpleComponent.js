import React, { useState, useEffect } from 'react';

const SimpleComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect hook with no dependencies
  useEffect(() => {
    // This function will run after every render
    console.log("Component has rendered");
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default SimpleComponent;
