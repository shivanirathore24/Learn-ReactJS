import ReactDOM from "react-dom/client";
import App from "./App";

import { a1, arr1, obj1, greet1 } from "./App";
import { b2, arr2, obj2 as object2, greet2 } from "./App";
import greet3 from "./App";
import greet4 from "./App";

console.log(a1); //7
console.log(arr1); //[1, 2, 3, 4, 5]
console.log(obj1); //{ name: "CSE" }
console.log(greet1);
// ƒ greet1() {
//   console.log("Hello World!");
// }

console.log(b2); //24
console.log(arr2); // [6, 7, 8, 9, 10];
console.log(object2); //{ name: "Shiv" }
console.log(greet2);
// ƒ greet2() {
//   console.log("Shivani Rathore");
// }

console.log(greet3);
console.log(greet4);
// ƒ greet4() {
//   console.log("Greeting 4");
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
