import MovieList from "./MovieList";
// import Student from "./Student";

function App() {
  return (
    <>
      <h1 className="app-title">Movie App</h1>
      <MovieList />
      {/* <Student name="Shiv" marks={96} />
      <Student name="Shakti" marks={91} />
      <Student name="Sati" marks={95} />
      <Student /> */}
    </>
  );
}

// Student.defaultProps = {
//   name: "Student",
//   marks: "N.A",
// };

export default App;
