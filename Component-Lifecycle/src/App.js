import React from "react";
//import ComponentA from "./Components/Component/ComponentA";
import TimerOne from "./Components/Timer/TimerOne"

class App extends React.Component {
  constructor(){
    super();
    this.state =  {
      mount: false
    }
  }

  handleMount = () =>{
    this.setState((prevState) => ({
      mount: !prevState.mount
    }))
  }
  
  render() {
    return(
      <>
      <button onClick={this.handleMount}>{this.state.mount ? "UN-MOUNT" : "MOUNT"}</button>
      {this.state.mount ? <TimerOne /> : null}
      </>
    )
  }
}

export default App;
