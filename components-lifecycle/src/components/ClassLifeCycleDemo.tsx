import React, { Component } from "react";

type IState = {
  count: number;
};

type IProps = {};

class LifecycleDemo extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is being created");
  }

  static getDerivedStateFromProps(props: IProps, state: IState) {
    console.log("getDerivedStateFromProps: Sync state with props if needed");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted to DOM");
  }


 shouldComponentUpdate(nextProps : any , nextState : any){
    console.log("shouldComponentUpdated :", "Yes")
    return true;
 }

    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log("getSnapshotBeforeUpdate : Just before DOM is updated")
        return null;
    }

  componentDidUpdate(prevProps: any, prevState: any , snapshot : any) {
    console.log("componentDidUpdate : Component updated");
  }


  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being Removed");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Rendering Component");
    return (
      <div>
        <h2>React Lifecycle Demo</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
