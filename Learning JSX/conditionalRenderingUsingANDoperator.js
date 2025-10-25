/* Conditional rendering using AND Operator */
function App() {
  let loggedIn = true;

  return (
    <>
      <h1>Hey, {loggedIn ? "Shiv" : "User"}</h1>
      {loggedIn && <p>Welcome to the Sports Club!</p>}
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);

/*
if loggedIn : true
OUTPUT:
Hey, Shiv
Welcome to the sports club!

if loggedIn : false
OUTPUT:
Hey, User
*/

/* 
1. In Javascript, everything except 0, null, "", undefined, false are considered to be true.
2. AND operator returns the last truthy and first falsy value.
Remember : Boolean value i.e true/false doesn't get rendered on the output screen.
*/
