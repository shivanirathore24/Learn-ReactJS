/* REACT */
const reactHeading = React.createElement("h1", {
  className: "head",
  id:"reactHead",
  children: "Hello, Shiv!"
});
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
console.log("React element:", reactHeading);
