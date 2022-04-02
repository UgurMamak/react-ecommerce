import React from "react";
import { connect } from "react-redux";

class ReduxStatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { globalState } = this.props;
    return (
      <div>
        ReduxStatePage
        <pre>
          <code>{JSON.stringify(globalState, null, 4)}</code>
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
