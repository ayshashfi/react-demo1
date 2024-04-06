import React, { useState, useEffect } from 'react';

const LifecycleExample = () => {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidMount
  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log('Component updated');
  }, [count]); // This effect will only run if count changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifecycleExample;
