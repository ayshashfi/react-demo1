import React, { useState } from 'react';

function CondRe({ isLoggedIn }) {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
    </div>
  );
}

export default CondRe;
