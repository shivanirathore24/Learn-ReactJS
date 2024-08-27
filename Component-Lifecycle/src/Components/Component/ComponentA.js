import React from "react";
import ComponentB from "./ComponentB";
import ErrorBoundary from "../../ErrorBoundary";

class ComponentA extends React.Component {
  /* 
  Order of Lifecycle Methods
  constructor() -> getDerivedStateFromProps() -> render() -> componentDidMount()
  */
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
    };
    console.log("ComponentA Constructor");

    //Warning: Can't call setState on a component that is not yet mounted (check in console)
    // this.setState({
    //   name: "CA"
    // })
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateFromProps");
    //Directly you cannot setState, use condition for setting state or else return null
    // this.setState({
    //   name: "CA"
    // })
    return null;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount");
    //Only use setState in lifecycle methods like componentDidMount or in event handlers.
    // this.setState({
    //   name: "CA",
    // });
  }

  render() {
    //render() function should be a pure function -> no side-effect & no change state happening here; only UI logic should come here
    console.log("ComponentA Render");
    //this.setState() implicitely calls render() fuunction --> causing infinite loop (check in console)
    // this.setState({
    //   name: "CA"
    // })
    return (
      <>
        <h1>{this.state.name}</h1>
        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
      </>
    );
  }
}

export default ComponentA;

/*** Order in which function is called b/w Parent & Child Component ***/
/*
ComponentA Constructor
ComponentA getDerivedStateFromProps
ComponentA Render
ComponentB Constructor
ComponentB getDerivedStateFromProps
ComponentB Render
ComponentB componentDidMount
ComponentA componentDidMount
*/
