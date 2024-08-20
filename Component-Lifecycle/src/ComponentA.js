import React from "react";

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
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount");
  }

  render() {
    console.log("ComponentA Render");
    return <h1>{this.state.name}</h1>;
  }
}

export default ComponentA;
