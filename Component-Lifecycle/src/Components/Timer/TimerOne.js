import React from "react";
export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleIncrease = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("TimerOne render");
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
      </>
    );
  }

  componentDidMount() {
    console.log("TimeOne componentDidMount");
    console.log("____________________________");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("TimerOne componentDidUpdate");
    console.log("____________________________");
  }
}

/*
*** CONSOLE ***
TimerOne Constructor
 TimerOne getDerivedStateFromProps
 TimerOne render
 TimeOne componentDidMount
 ____________________________
 TimerOne getDerivedStateFromProps
 TimerOne render
 Timer getSnapshotBeforeUpdate
 TimerOne componentDidUpdate
 ____________________________
 TimerOne getDerivedStateFromProps
 TimerOne render
 Timer getSnapshotBeforeUpdate
 TimerOne componentDidUpdate
 ____________________________

 This sequence repeats every time you click the "Increase" button. 
 Here, I have clicked button 2 times so, 2 times update related methods is called.
 */



