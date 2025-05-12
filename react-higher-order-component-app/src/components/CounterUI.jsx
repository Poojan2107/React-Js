import React from 'react'

const CounterUI = ({count,increament}) => {
  return (
    <>
      <button onClick={increament}>Count : {count}</button>
    </>
  );
}

export default CounterUI
