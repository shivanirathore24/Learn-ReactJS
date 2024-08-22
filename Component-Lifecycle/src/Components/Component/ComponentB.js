import React from "react";

class ComponentB extends React.Component {
  /* 
  Order of Lifecycle Methods
  constructor() -> getDerivedStateFromProps() -> render() -> componentDidMount()
  */
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
      data: []
    };
    console.log("ComponentB Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentB componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {
    console.log("ComponentB Render");
    return(
        <>
        <h2>{this.state.name}</h2>
        <ul>
            {this.state.data.map((d) => {
                return(
                    <li>{d.username}</li>
                )
            })}
        </ul>
        </>
    )
  }
}

export default ComponentB;