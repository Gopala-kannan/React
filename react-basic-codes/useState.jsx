// Updating the screen
// useState

import { useState } from 'react'; // first, import the usestate from react

// now can declare a state variable inside the componenet;

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return(
    <button onClick ={handleClick}>
      click {count}
    </button>
  )
}

// code

import { useState } from 'react';

export default function MyApp() {
  return(
    <div>
      <h1>Counter State</h1>
      <MyButton />
    </div>
  )
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 10);
  }

  return(
    <button onClick={handleClick}>Click {count}</button>
  )
}
