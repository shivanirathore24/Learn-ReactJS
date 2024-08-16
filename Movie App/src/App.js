import Movielist from "./Movielist";
import Navbar from "./Navbar";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
// import Student from "./Student";
function App() {
  return (
    <>
      <Navbar />
      <Movielist />
      <HeadingOne />
      <HeadingTwo />
      {/* <Student /> */}
      {/* <Student stuname="Shiv" marks={91} />
      <Student stuname="Siri" marks={89} /> */}

      {/* <Student stuname="Shiv" marks={91} />
      <Student stuname="Siri" marks={89} />
      <Student marks={89} />
      <Student /> */}
    </>
  );
}

// Student.defaultProps = {
//   stuname: "Student",
//   marks: "N.A",
// };

export default App;
