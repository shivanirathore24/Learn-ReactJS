import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Utility App</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/todo">To Do</NavLink>
        <NavLink to="/notes">Notes</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
