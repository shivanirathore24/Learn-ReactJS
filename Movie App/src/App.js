import Movielist from "./Movielist";
import Student from "./Student";
function App() {
  return (
    <>
      <h1>Movie App</h1>
      <Movielist />
      {/* <Student /> */}
      {/* <Student stuname="Shiv" marks={91} />
      <Student stuname="Siri" marks={89} /> */}

      <Student stuname="Shiv" marks={91} />
      <Student stuname="Siri" marks={89} />
      <Student marks={89} />
      <Student />
    </>
  );
}

Student.defaultProps = {
  stuname: "Student",
  marks: "N.A",
};

export default App;
