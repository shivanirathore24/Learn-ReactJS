/* 
Conditional rendering using ternary operator: useful when you want to change some part of component 
instead of changing whole component.
*/

function App() {
  let loggedIn = true;

  //here using if-else inside JSX would be complicated just for changing some part of component,
  //return inside return is not acceptable so, solution : ternary operator
  return (
    <>
      <h1>Hello, {loggedIn ? "Shiv" : "User"}</h1>
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
