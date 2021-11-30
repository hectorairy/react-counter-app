import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value = 10 }) => {
  const [counter, setCouter] = useState(value);
  // handleAdd
  const handleAdd = (e) => {
    setCouter(counter + 1);
    // setCouter((c) => c + 1);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={() => setCouter(value)}>Reset</button>
      <button
        onClick={
          counter === 1 ? () => setCounter(1) : () => setCouter(counter - 1)
        }
      >
        -1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
