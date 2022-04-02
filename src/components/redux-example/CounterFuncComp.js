import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementAction } from "../../redux/example/actions";

function CounterFuncComp(props) {
  const count = useSelector((state) => state.example.count);
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch({ type: "counter/decrement" });
  };

  return (
    <div className="container">
      <h1>Function component</h1>
      <h2>{count}</h2>
      <button type="button" onClick={() => decrement()}>
        -
      </button>
      <button type="button" onClick={() => dispatch(incrementAction())}>
        +
      </button>
    </div>
  );
}

export default CounterFuncComp;
