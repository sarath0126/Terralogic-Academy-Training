import React, { Component } from "react";

class CounterClass extends Component<{ count?: number }, { count: number }> {
  constructor(props: { count?: number }) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementHandler = () => {
    this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 });
  };

  render() {
    return (
      <>
        <p>Count Value : {this.state.count}</p>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
      </>  
    );
  }
}

export default CounterClass;