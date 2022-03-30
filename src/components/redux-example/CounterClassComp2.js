import React, { Component } from 'react'
import {connect} from "react-redux";
import {actionCreators,doubleDecrementAction,incrementDoubleAction} from "../../redux/example/actions2"


class CounterClassComp2 extends Component {
  render() {
    return (
        <div className="container">
        <h1>Class component2</h1>
        <h2>{this.props.counter.count}</h2>
        <button onClick={()=>this.props.doubleDecrementAction()}>2-</button> 
        <button onClick={()=>this.props.incrementDoubleAction()} >2+</button>

       <br/>
       <button onClick={()=>this.props.doubleDecrement2()}>2-</button> 

    </div>
    )
  }
}


function mapStateToProps(state) {
    return { counter: state.example }
}



// function mapDispatchToProps(dispatch,ownProps) {
//     return{

//         doubleDecrement: ()=> dispatch(actionCreators.doubleDecrement()),
//         test2
        
//     }
// }



const mapDispatchToProps={
  doubleDecrementAction,
  incrementDoubleAction,
  doubleDecrement2:actionCreators.doubleDecrement
}


export default connect(mapStateToProps,mapDispatchToProps)(CounterClassComp2)