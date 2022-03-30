import React, {Component} from 'react';
import {connect} from "react-redux";

class Counter extends Component {

    componentDidMount() {
        console.log("CounterProp=",this.props);
    }


    render() {
        return (
            <div>
                <h1>{this.props.counter.count}</h1>
                <button onClick={()=>this.props.increment()} >+</button>
                <button onClick={()=>this.props.decrement()} >-</button>

            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    // ... computed data from state and optionally ownProps

    return { counter: state.CounterReducer};


}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'counter/increment' }),
        decrement: () => dispatch({ type: 'counter/decrement' }),
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Counter)