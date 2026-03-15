import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <h4>HOME</h4>
        </Link>
        <Link to="/about">
          <h4>ABOUT</h4>
        </Link>
        <Link to="/items">
          {" "}
          <h4>ITEMS</h4>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
