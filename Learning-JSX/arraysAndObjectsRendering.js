/*Arrays and Object Rendering in JSX*/
function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  let obj = {
    name: "Shiv",
    age: 24,
  };

  return (
    <>
      <p>Arrays and Object in Javascript</p>
      {arr}
      {arr.map((num) => (
        <h1>{num}</h1>
      ))}
      {obj.name}
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);

/*
1. We cannot directly access object as {obj} inside JSX, it gives error as: Objects are 
not valid as a React child. But object properties are accessible inside JSX.
2. In React, for loop doesn't work becoz for loop doesn;t return anything. In order to JSX
to render it on the screen it should return something. 
So, Alternative solution : Map function which returns something.
*/





