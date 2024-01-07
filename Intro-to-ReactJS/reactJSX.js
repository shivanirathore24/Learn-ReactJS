/* REACT with JS */
const reactHeading = React.createElement("h1", {
  className: "head",
  id: "reactHead",
  children: "Shiv",
});
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
console.log("React element:", reactHeading);

/* REACT with JSX */
const jsxHeading = <h1>Hello, Shiv !</h1>;
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
