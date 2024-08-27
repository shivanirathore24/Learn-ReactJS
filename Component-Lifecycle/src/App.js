import React from "react";
import ComponentA from "./Components/Component/ComponentA";
import ComponentC from "./Components/Component/ComponentC";
//import TimerOne from "./Components/Timer/TimerOne";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //timerOn: false,
    };
  }

  // handleTimerOn = () => {
  //   this.setState((prevState) => ({
  //     timerOn: !prevState.timerOn,
  //   }));
  // };

  render() {
    return (
      <>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentC />
        </ErrorBoundary>
      </>
    );

    // return (
    //   <>
    //     <TimerOne timerOn={this.state.timerOn} />
    //     <button onClick={this.handleTimerOn}>
    //       {this.state.timerOn ? "Stop" : "Start"}
    //     </button>
    //   </>
    // );
  }
}

export default App;
