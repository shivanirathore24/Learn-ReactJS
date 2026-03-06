import React from "react";
//import ComponentB from "./ComponentB";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
      data: [],
    };
    console.log("ComponentA constructor!");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateByProps!");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount!");
    // Intentionally change the API endpoint to `/user` instead of `/users`
    // to simulate an error and test the ErrorBoundary component.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    console.log(this.state.data);
    console.log("ComponentA render!");

    return (
      <>
        <h1>{this.state.name}</h1>
        <ul>
          {this.state.data.map((d) => {
            return <li key={d.id}>{d.username}</li>;
          })}
        </ul>
        {/* <ComponentB /> */}
      </>
    );
  }
}

export default ComponentA;
