/* Case-1: Props in Class Component */

// DefaultProps works properly with class components.
// Props are accessed using this.props inside render().

// import React from "react";
// class Student extends React.Component {
//   render() {
//     // Destructuring values from this.props
//     const { name, marks } = this.props;
//     return (
//       <>
//         <h1>Hello, {name}</h1>
//         <p>You have secured {marks}%</p>
//         <hr />
//       </>
//     );
//   }
// }

/* Case-2: Basic Functional Component */

// In functional components, props are received as a parameter.
// Using Student.defaultProps is not preferred in modern React.

// function Student(props) {
//   const { name, marks } = props;
//   return (
//     <>
//       <h1>Hello, {name}</h1>
//       <p>You have secured {marks}%</p>
//       <hr />
//     </>
//   );
// }

/* Case-3: Functional Component with Default Values Inside */

// Full props object is available (useful for debugging).
// Default values are assigned during destructuring.

// function Student(props) {
//   console.log(props); // Prints complete props object on every render

//   const { name = "Student", marks = "N.A" } = props;

//   return (
//     <>
//       <h1>Hello, {name}</h1>
//       <p>You have secured {marks}%</p>
//     </>
//   );
// }

/* Case-4: Recommended (Modern React Approach) */

// Default values are assigned directly in function parameters.
// Cleaner, shorter, and preferred in production code.

function Student({ name = "Student", marks = "N.A" }) {
  return (
    <>
      <h1>Hello, {name}</h1>
      <p>You have secured {marks}%</p>
      <hr/>
    </>
  );
}

export default Student;
