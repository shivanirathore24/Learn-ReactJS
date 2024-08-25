import React from "react";
//import ComponentA from "./Components/Component/ComponentA";
import TimerOne from "./Components/Timer/TimerOne";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
    };
  }

  handleTimerOn = () => {
    this.setState((prevState) => ({
      timerOn: !prevState.timerOn,
    }));
  };

  render() {
    return (
      <>
        <TimerOne timerOn={this.state.timerOn} />
        <button onClick={this.handleTimerOn}>
          {this.state.timerOn ? "Stop" : "Start"}
        </button>
      </>
    );
  }
}

export default App;
