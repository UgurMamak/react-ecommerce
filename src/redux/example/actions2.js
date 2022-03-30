
export const actionCreators = {
   doubleDecrement
};


function doubleDecrement(){
 return { type: 'counter/doubleDecrement' }
}

const doubleIncrement=()=>{
  return { type: 'counter/doubleIncrement', payload: 2 }
}


export const doubleDecrementAction= body => {
  return dispatch => {
    dispatch(doubleDecrement());
  }
};


export const incrementDoubleAction=()=>{
  return  dispatch=>{
      dispatch(doubleIncrement())
  }
}