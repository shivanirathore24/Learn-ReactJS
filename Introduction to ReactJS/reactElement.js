/* REACT */
const reactHeading = React.createElement("h1", {
  className: "head",
  id: "reactHead",
  children: "Hello, Shiv!",
});
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
console.log("React element:", reactHeading);

/* JAVASCRIPT */
// const heading = document.createElement("h2");
// heading.textContent = "Shivani Rathore";
// heading.className = "header";
// document.getElementById("root").append(heading);
// console.log("Javascript element:", heading);
