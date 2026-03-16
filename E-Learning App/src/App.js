import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Courses />
    </div>
  );
}

export default App;
