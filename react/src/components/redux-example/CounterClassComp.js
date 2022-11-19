import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as exampleActions from "../../redux/example/actions";

class CounterClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      counter: { count },
      decrement,
      increment,
    } = this.props;
    return (
      <div className="container">
        <h1>Class component</h1>
        <h2>{count}</h2>
        <button type="button" onClick={() => decrement()}>
          -
        </button>
        <button type="button" onClick={() => increment()}>
          +
        </button>
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
