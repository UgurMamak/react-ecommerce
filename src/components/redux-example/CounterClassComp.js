import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as exampleActions from "../../redux/example/actions";

class CounterClassComp extends Component {
  render() {
    return (
      <div className="container">
        <h1>Class component</h1>
        <h2>{this.props.counter.count}</h2>
        <button onClick={() => this.props.decrement()}>-</button>
        <button onClick={() => this.props.increment()}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.example };
}

function mapDispatchToProps(dispatch) {
  return {
    decrement: () => dispatch({ type: "counter/decrement" }),
    increment: bindActionCreators(exampleActions.incrementAction2, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClassComp);
