/* Rendering components based on condition */
function Student() {
  let students = [
    {
      name: "Shivani",
      age: 24,
      marks: 77,
    },
    {
      name: "MSD",
      age: 33,
      marks: 80,
    },
    {
      name: "Neeraj",
      age: 26,
      marks: 78,
    },
  ];
  return (
    <>
      <h1>Student Details</h1>
      <table>
        {/* Add <thead> and <tbody> tag to avoid warning in console */}
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Car() {
  let cars = [
    {
      name: "BMW",
      model: "7 Series",
      year: 2023,
    },
    {
      name: "Audi",
      model: "A8",
      year: 2024,
    },
    {
      name: "Mercedes",
      model: "S-class",
      year: 2022,
    },
  ];
  return (
    <>
      <h1>Cars Details</h1>
      <table>
        {/* Add <thead> and <tbody> tag to avoid warning in console */}
        <thead>
          <tr>
            <th>NAME</th>
            <th>MODEL</th>
            <th>YEAR</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function CarName() {
  let cars = ["BMW", "Audi", "Mercedes", "Jaguar", "Rolls-Royce"];

  return (
    <>
      <h1>Cars Name</h1>
      {cars.map((car, index) => (
        <h3 key="index">{car}</h3>
      ))}
    </>
  );
}

/* Rendering multiple components */
/*
function App() {
  return (
    <>
      <Student />
      <Car />
      <CarName />
    </>
  );
}
*/

/* Rendering components/elements based on some condition , and this concept is known as conditional rendering */
function App() {
  let showCars = true;

  /* We can skip parenthesis i.e () if returning single component */
  if (showCars) {
    return <Car />;
  }
  return (
    <>
      <Student />
      <CarName />
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
