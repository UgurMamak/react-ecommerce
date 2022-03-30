import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxStatePage extends Component {
  render() {
    return (
      <div>
        ReduxStatePage
        <pre>
          <code>{JSON.stringify(this.props.globalState, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    globalState: state,
  };
}

export default connect(mapStateToProps, null)(ReduxStatePage);
