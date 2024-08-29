import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastname = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input value={this.state.name} onChange={this.handleName} />
          </Row>
          <Row label="Last Name">
            <input value={this.state.lastName} onChange={this.handleLastname} />
          </Row>
        </div>

        <h2>Hello, {this.state.name + " " + this.state.lastName}</h2>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
