import React from "react";
//import ComponentA from "./ComponentA";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mount: false,
    };
  }

  handleMount = () => {
    this.setState((prevState) => ({ mount: !prevState.mount }));
  };

  render() {
    return (
      <>
        <button onClick={this.handleMount}>
          {this.state.mount ? "Un-MOUNT" : "MOUNT"}
        </button>
        {this.state.mount ? <Timer /> : null}
        {/* <ComponentA /> */}
      </>
    );
  }
}

export default App;
