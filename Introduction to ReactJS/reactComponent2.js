/* Functional Component using Arrow Function */

const App1 = () => {
  return (
    <>
      <h1>Hello, Shiv ! </h1>
      <p>This heading is created using JSX</p>
    </>
  );
};

//here we are returning one expression so we can remove return keyword and curly braces.
const App2 = () => (
  <>
    <h1>Hello, Shiv ! </h1>
    <p>This heading is created using JSX</p>
  </>
);

function Name() {
  return (
    <>
      <p>JSX is Javascript XML</p>
    </>
  );
}

/* here we are calling 3 components, so we need to enclose inside the parent component or fragment */
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App1 />
    <App2 />
    <Name />
  </>
);

/* Benefits of Arrow function over normal function: */
// 1. Decreases lines of code
// 2. Arrow function implicitely "returns" if curly braces not present (but only for 1 expression)
// whereas normal function only returns when you write "return" keyword explicitely.
