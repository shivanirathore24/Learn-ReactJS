/* FUNCTIONAL COMPONENT */
// function App() {
//   return <h1>Functional Component</h1>;
// }
// export default App;

/* CLASS COMPONENT */
import React from "react"; //import should be in first line of code
class App extends React.Component {
  render() {
    return <h1>Class Component</h1>;
  }
}

export default App;

/* NAMED EXPORT */

// 1. Export Individually
export let a1 = 7;
export var arr1 = [1, 2, 3, 4, 5];
export const obj1 = { name: "CSE" };

export function greet1() {
  console.log("Hello World!");
}

//2. Export all at once at the bottom
let a2 = 24;
var arr2 = [6, 7, 8, 9, 10];
const obj2 = { name: "Shiv" };

function greet2() {
  console.log("Shivani Rathore");
}

export { a2 as b2, arr2, obj2, greet2 };

/* DEFAULT EXPORT */

// 1. Export Individually
// export default function greet3() {
//   console.log("Greeting 3");
// }

//2. Export all at once at the bottom
// function greet4() {
//   console.log("Greeting 4");
// }

// export default greet4;
//Only one default export allowed per module
