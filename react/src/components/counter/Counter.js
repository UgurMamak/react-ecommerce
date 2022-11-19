import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: "ugur",
    };
  }

  render() {
    const { hello } = this.state;
    return <div>{hello}</div>;
  }
}

export default Counter;
