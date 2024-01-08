/* Student Information Table */
function App() {
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
          {/* We need map function - for looping over each element in the array and printing the details of the students*/}
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
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);

/*
If we don't use "key" property : in console --> warning : Each child in a list should have a unique "key" prop.
Use index number as key becoz index number is unique. 
But when working with objects we can use "id" as key if provided; if not provided we can use index number only.
"key" prop can be passed to any element, it's not limited to list only.
*/
