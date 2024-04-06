import React, { useState } from "react";

function ReviewUseState() {
  const [showMessage, setShowMessage] = useState(false);

  const clickHandler = () => {
    setShowMessage(true);
  };

  return (
    <div>
      {showMessage ? <p>Logged in</p> : <p>Please login...</p>}
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default ReviewUseState;
