/* Expressions in JSX */
function sum() {
  let a = 3 + 4;
  //necessary to return value becoz any valid expression which resolves to a value will be returned by
  //JSx on the UI; otherwise it won't return.
  return a;
}

function App() {
  let name = "Shiv";
  let header = <h3>JSX Expressions</h3>; // here we are storing JSX expression in JS variable

  //JSX should be enclose inside paranthesis i.e () which makes sure that
  //it tells Javascript that this is a single expression.
  return (
    <>
      {/*If you are using JS inside JSX then that should be enclosed inside curly brackets i.e {}*/}
      <h2>Hi, {name} !</h2>
      {header}
      <p> Calling function: {sum()}</p>
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
