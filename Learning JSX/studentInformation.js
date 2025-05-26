/* Student Information Table */
function App() {
  let students = [
    {
      name: "Shivani Rathore",
      age: 24,
      marks: 90,
    },
    {
      name: "MS Dhoni",
      age: 43,
      marks: 95,
    },
    {
      name: "Neeraj Chopra",
      age: 26,
      marks: 91,
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
1. If we don't use the "key" property:
   ➤ Console Warning: Each child in a list should have a unique "key" prop.
   ➤ Use the index number as the key because it is unique within the list.
   ➤ However, when working with objects (like from a database), prefer using a unique "id" if available.
   ➤ Note: The "key" prop can be passed to any element in a list, not just <li>. It's used by React to track which items change, are added, or removed.

2. If we don't use <thead> or <tbody>:
   ➤ Console Warning: validateDOMNesting(...): <tr> cannot appear as a child of <table>.
   ➤ Solution: Wrap <tr> elements inside <thead>, <tbody>, or <tfoot> to follow valid HTML structure and avoid warnings.
*/
