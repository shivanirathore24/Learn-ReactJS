import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ErrorBoundary from "./ErrorBoundary";
//import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   timerOn: false,
    // };
  }

  // handleTimerOn = () => {
  //   this.setState((prevState) => ({ timerOn: !prevState.timerOn }));
  // };

  render() {
    return (
      <>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
        {/* <Timer timerOn={this.state.timerOn} />
        <button onClick={this.handleTimerOn}>
          {this.state.timerOn ? "STOP" : "START"}
        </button> */}
      </>
    );
  }
}

export default App;
