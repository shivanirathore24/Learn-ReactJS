/*
Problem statement
You are given a timetable of a class 12th student. You need to display the timetable of the student in the form 
of a table. The given timeTable data consists of objects of a particular day and each day consists of objects which 
show subject details across a particular hour.

Test Cases
1.  Should render a table with caption, thead and tbody.
The table should be properly constructed using the thead and tbody tags.
It should have a caption as “School TimeTable of a class 12th Student”.

2. Should render eight columns in thead and five rows in tbody.
There should be 8 columns as shown in the expected output.
There should be 5 rows under the tbody tag.

3. Should render data correctly.
The table should display the same data as given in the given object.

Expected Output
'images' folder --> studentTimetable.png

Hint: (click to expand)
You can use javascript functions like maps to iterate over the objects and render it accordingly.
Learn how to use map function to iterate over the object using the doc :Link

Note:
Use the same data as provided in the scaffold, any modification in the scaffold code will lead to failure of test cases.
);
*/

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const timeTable = {
  Monday: {
    9: { subject: "Maths", teacher: "MS Dhoni", time: "1 hour" },
    10: { subject: "Physics", teacher: "Neeraj Chopra", time: "1 hour" },
    11: { subject: "Chemistry", teacher: "Virat Kohli", time: "1 hour" },
    13: { subject: "English Litrature", teacher: "Joe Root", time: "1 hour" },
    14: { subject: "Hindi Vyakaran", teacher: "Steve Smith", time: "1 hour" },
    15: { subject: "PT", teacher: "Pat Cummins", time: "1 hour" },
  },
  Tuesday: {
    9: { subject: "Physics", teacher: "Neeraj Chopra", time: "1 hour" },
    10: { subject: "Hindi Sahitya", teacher: "Shubman Gill", time: "1 hour" },
    11: {
      subject: "Environtal Studies",
      teacher: "Alastair Cook",
      time: "1 hour",
    },
    13: { subject: "Biology", teacher: "Rachin Ravindra", time: "1 hour" },
    14: { subject: "Maths", teacher: "MS Dhoni", time: "1 hour" },
    15: {
      subject: "Physics Practical",
      teacher: "Neeraj Chopra",
      time: "1 hour",
    },
  },
  Wednesday: {
    9: { subject: "Chemistry", teacher: "Virat Kohli", time: "1 hour" },
    10: {
      subject: "English Grammar",
      teacher: "Faf du Plessis",
      time: "1 hour",
    },
    11: { subject: "Maths", teacher: "MS Dhoni", time: "1 hour" },
    13: { subject: "English Litrature", teacher: "Joe Root", time: "1 hour" },
    14: { subject: "Physics", teacher: "Neeraj Chopra", time: "1 hour" },
    15: {
      subject: "Chemistry Practical",
      teacher: "Virat Kohli",
      time: "1 hour",
    },
  },
  Thursday: {
    9: { subject: "Biology", teacher: "Rachin Ravindra", time: "1 hour" },
    10: { subject: "Hindi Sahitya", teacher: "Shubman Gill", time: "1 hour" },
    11: { subject: "Chemistry", teacher: "Virat Kohli", time: "1 hour" },
    13: { subject: "Maths", teacher: "MS Dhoni", time: "1 hour" },
    14: { subject: "Physics", teacher: "Neeraj Chopra", time: "1 hour" },
    15: {
      subject: "Biology Practical",
      teacher: "Rachin Ravindra",
      time: "1 hour",
    },
  },
  Friday: {
    9: { subject: "English Litrature", teacher: "Joe Root", time: "1 hour" },
    10: { subject: "Hindi Sahitya", teacher: "Shubman Gill", time: "1 hour" },
    11: {
      subject: "English Grammar",
      teacher: "Faf du Plessis",
      time: "1 hour",
    },
    13: { subject: "Biology", teacher: "Rachin Ravindra", time: "1 hour" },
    14: { subject: "Hindi Vyakaran", teacher: "Steve Smith", time: "1 hour" },
    15: { subject: "PT", teacher: "Pat Cummins", time: "1 hour" },
  },
};

const App = () => (
  <table border="1">
    <caption>School time-table of a class 12th Student.</caption>
    <thead>
      <tr>
        <th></th>
        <th>9am-10am</th>
        <th>10am-11am</th>
        <th>11am-12noon</th>
        <th>12noon-1pm</th>
        <th>1pm-2pm</th>
        <th>2pm-3pm</th>
        <th>3pm-4pm</th>
      </tr>
    </thead>

    <tbody>
      {Object.keys(timeTable).map((day, index) => (
        <tr key={index}>
          <th>{day}</th>
          {Object.keys(timeTable[day]).map((hour, index) => {
            if (index == 3) {
              return (
                <>
                  <td key={index}>Break</td>
                  <td key={index}>{timeTable[day][hour].subject}</td>
                </>
              );
            } else return <td key={index}>{timeTable[day][hour].subject}</td>;
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
