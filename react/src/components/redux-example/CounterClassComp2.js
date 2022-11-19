import React from "react";
import { connect } from "react-redux";
import {
  actionCreators,
  doubleDecrementAction,
  incrementDoubleAction,
} from "../../redux/example/actions2";

class CounterClassComp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      counter: { count },
      doubleDecrement2,
      doubleDecrementAction,
      incrementDoubleAction,
    } = this.props;

    return (
      <div className="container">
        <h1>Class component2</h1>
        <h2>{count}</h2>
        <button type="button" onClick={() => doubleDecrementAction()}>
          2-
        </button>
        <button type="button" onClick={() => incrementDoubleAction()}>
          2+
        </button>

        <br />
        <button type="button" onClick={() => doubleDecrement2()}>
          2-
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.example };
}

// function mapDispatchToProps(dispatch,ownProps) {
//     return{

//         doubleDecrement: ()=> dispatch(actionCreators.doubleDecrement()),
//         test2

//     }
// }

const mapDispatchToProps = {
  doubleDecrementAction,
  incrementDoubleAction,
  doubleDecrement2: actionCreators.doubleDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClassComp2);
