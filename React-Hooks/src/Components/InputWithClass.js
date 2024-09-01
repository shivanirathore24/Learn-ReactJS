import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Shivani",
      lastName: "Rathore",
    };
    this.timer = null;
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

  //Issues:
  //timer related code is not at one place but writing in two different function.
  //Concerns are not seperated like displaying name as title and showing window width
  componentDidMount() {
    document.title = this.state.name + " " + this.state.lastName;
    this.timer = setInterval(() => {
      console.log("Window-width: ", window.innerWidth);
    }, 2000);
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.lastName;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input
              className="input"
              value={this.state.name}
              onChange={this.handleName}  //bug fixed from last pushed code
            />
          </Row>
          <Row label="Last Name">
            <input
              className="input"
              value={this.state.lastName}
              onChange={this.handleLastname}
            />
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
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
