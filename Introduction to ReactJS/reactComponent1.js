/* React Component */

function App() {
  //functional component
  return (
    <>
      <h1>Hello, Shiv ! </h1>
      <p>This heading is created using JSX</p>
    </>
  );
}

/* During Call: App() --> function , <App/> --> Component */
//ReactDOM.createRoot(document.getElementById("root")).render(App());
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/*
Add Extension to Chrome : React Developers Tools
Inspect --> >> --> Components --> you will see 'App" as Components
*/
