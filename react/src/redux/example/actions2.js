function doubleDecrement() {
  return { type: "counter/doubleDecrement" };
}

const doubleIncrement = () => ({ type: "counter/doubleIncrement", payload: 2 });

export const doubleDecrementAction = () => (dispatch) => {
  dispatch(doubleDecrement());
};

export const incrementDoubleAction = () => (dispatch) => {
  dispatch(doubleIncrement());
};

export const actionCreators = {
  doubleDecrement,
};
