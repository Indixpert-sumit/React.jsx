import React, { useReducer } from 'react';

const CounterWithReducer = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        if (state < 20) {
          return state + 1;
        }
        else {
          alert('max number reached')
        }
        return state;

      case "Decrement":
        if (state > 1) {
          return state - 1;
        }
        else {
          alert('Number cannot be negative')
        }
        return state;

      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      current value of counter = {counter}
      <br />
      <button

        onClick={() => dispatch({ type: "increment" })}>+</button>
      <button
        onClick={() => dispatch({ type: "Decrement" })}>-</button>
    </div>
  );
};

export default CounterWithReducer;
