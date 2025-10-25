/* Conditional rendering using OR Operator */
//case-1
function App1() {
  let loggedIn = true;
  let firstName = "Shivani";
  let lastName = "";

  return (
    <>
      <h1>Hey, {loggedIn ? lastName || firstName : "User"}</h1>
      {loggedIn && <p>Welcome to the Sports Club!</p>}
    </>
  );
}

//case-2
function App2() {
  let loggedIn = true;
  let fname = "Shivani";
  let lname = "Rathore";

  return (
    <>
      <h1>Hey, {loggedIn ? lname || fname : "User"}</h1>
      {loggedIn && <p>Welcome to the Sports Club!</p>}
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <>
    <App1 />
    <App2 />
  </>
);

/*
OUTPUT:
Case-1
Hey, Shivani
Welcome to the Sports Club!

Case-2
Hey, Rathore
Welcome to the Sports Club!
*/

/*
NOTE: OR Operator used "first truthy" and the "last falsy" value. 
*/
