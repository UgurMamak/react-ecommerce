export const actionCreators = {};

export const incrementAction = () => (dispatch) => {
  dispatch({ type: "counter/increment", payload: 1 });
};

export const incrementAction2 = () => (dispatch) => {
  dispatch({ type: "counter/increment", payload: 1 });
};

export const decrementAction = (dispatch) => {
  dispatch({ type: "counter/decrement", payload: 1 });
};
