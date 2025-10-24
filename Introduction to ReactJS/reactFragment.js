/* React Fragment */

//Problem - we can't assign multiple elements to one variable.
/*const jsxHeading = <h1>Hello, Shiv ! </h1><p>This is created using JSX</p>;  // error
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
*/

//Solution-1 : use <div> tag to wrap multiple elements but
//one problem- div will acts extra wrapper
const jsxHeading1 = (
  <div>
    <h1>Hello, Shiv ! </h1>
    <p>This heading1 is created using JSX</p>
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading1);

//Solution-2 (better): use <React.Fragment></React.Fragment> OR <></>
const jsxHeading2 = (
  <React.Fragment>
    <h1>Hello, Shiv ! </h1>
    <p>This heading2 is created using JSX</p>
  </React.Fragment>
);
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading2);

const jsxHeading3 = (
  <>
    <h1>Hello, Shiv ! </h1>
    <p>This heading3 is created using JSX</p>
  </>
);
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading3);
