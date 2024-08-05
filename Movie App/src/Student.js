import React from "react";

// Props in React
class Student extends React.Component {
  render() {
    const { stuname, marks } = this.props;
    console.log(this.props);
    return (
      <>
        {/* <h1>Hello, Alexa</h1> */}

        {/* <h1>Hello, {this.props.stuname}</h1>
        <p1>You have secured {this.props.marks} %</p1>
        <hr /> */}

        <h1>Hello, {stuname}</h1>
        <p1>You have secured {marks} %</p1>
        <hr />
      </>
    );
  }
}

export default Student;
