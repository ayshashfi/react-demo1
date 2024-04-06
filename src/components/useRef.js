import React, { useRef } from 'react';

function InputFocus() {
  // Create a ref to store a reference to the input element
  const inputRef = useRef(null);

  // Function to focus on the input element when the button is clicked
  const focusInput = () => {
    // Access the current value of the ref using inputRef.current
    inputRef.current.focus();
    console.log('input')
  };

  return (
    <div>
      {/* Assign the ref to the input element */}
      <input type="text" ref={inputRef} />
      {/* Button to focus on the input element */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
