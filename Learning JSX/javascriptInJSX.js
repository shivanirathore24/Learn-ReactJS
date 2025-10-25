/*Embedding Javascript inside JSX*/

function App() {
  var name = "Shiv";
  var age = 24;
  let demo = null; //it will render nothing in JSX
  let undefineValue = undefined; //it will render nothing in JSX
  let isMarried = false;
  //To display a boolean value you can use the  .toString() method on the variable to convert it into a string.
  return (
    <>
      <h1>Hello, {name} ! </h1>
      <p> Your age is {age} </p>
      <p> Null value : {demo} </p>
      <p> Undefined value : {undefineValue} </p>
      <p> Boolean value : {isMarried}</p>
      <p> Boolean value : {isMarried.toString()}</p>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
