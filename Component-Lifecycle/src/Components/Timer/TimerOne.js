import React from "react";
export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timer = null;
    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;  //returns true, so the component re-renders whenever there's a state or prop change.
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
        <h1>
          Time Spent:{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }

  componentDidMount() {
    console.log("TimeOne componentDidMount");
    console.log("____________________________");
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 3000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    //You're returning the value 5, which is then passed to the componentDidUpdate method. 
    //This value can be any snapshot of the state or DOM that might be useful after the update
    return 5;
  }


  /* First parameter should be the previous props (prevProps).
  Second parameter should be the previous state (prevState).
  Third parameter should be the snapshot value (snapshot).
  You can name argument anything you prefer. */
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("TimerOne componentDidUpdate");
    console.log("____________________________");
    //You log the previous props, previous state, and the snapshot value to the console, helping you debug or 
    //track what the component was like before the update. 
    console.log("Previous Props:", prevProps);
    console.log("Previous State:", prevState);
    console.log("Snapshot from getSnapshotBeforeUpdate", snapShot);
    
  }

  componentWillUnmount() {
    console.log("TimerOne componentWillUnmount");
    clearInterval(this.timer);
  }
}
