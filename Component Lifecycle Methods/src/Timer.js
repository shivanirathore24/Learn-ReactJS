import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
    };

    this.timer = null;
    console.log("Timer Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log("_________________________________");
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("Timer shouldComponentUpdate");
  //     return true;
  //   }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Timer componentDidUpdate");
    console.log("_________________________________");
  }

  render() {
    console.log("Timer render");
    return (
      <div>
        <h2>Time Spent: {this.state.time}</h2>
        {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
      </div>
    );
  }
}
