/* Assigning Unique Keys */
function App() {
  let cars = ["BMW", "Audi", "Nexa", "Honda", "Maruti"];

  return (
    <>
      <h1>List of cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} > {car} </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
