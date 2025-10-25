/*Arrays and Object Rendering in JSX*/

function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  let obj = {
    name: "Shiv",
    age: 24,
  };

  return (
    <>
      <h1>Arrays and Objects in Javascript</h1>
      <h2>{arr}</h2>
      {arr.map((num) => (
        <h2>{num}</h2>
      ))}
      <h3>{obj.name}</h3>
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);

/*
1. We cannot directly access object as {obj} inside JSX, it gives error as: Objects are 
not valid as a React child. But object properties are accessible inside JSX.
2. In React, for loop doesn't work becoz for loop doesn't return anything. In order to JSX
to render it on the screen it should return something. 
So, Alternative solution : Map function which returns something.
*/
