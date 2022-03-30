import * as React from 'react';
import { useSelector,useDispatch  } from 'react-redux'

import {incrementAction} from "../../redux/example/actions";
export default function CounterFuncComp(props) {
    const count = useSelector(state => state.example.count);
    const dispatch=useDispatch();

    return (
        <div className="container">
            <h1>Function component</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch({type:'counter/decrement'})}>-</button>
            <button onClick={()=>dispatch(incrementAction())}>+</button>
        </div>
    );
};