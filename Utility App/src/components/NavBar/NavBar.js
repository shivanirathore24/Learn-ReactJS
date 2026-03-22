import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Utility App</h2>

      <div className={styles["nav-links"]}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/todo"
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          To Do
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Notes
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
