import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles["home-container"]}>
      <h1>Utility App</h1>
      <p>Manage your daily tasks and notes efficiently</p>

      <div className={styles["home-cards"]}>
        <Link to="/todo" className={styles.card}>
          <h3>To Do</h3>
          <p>Track your daily tasks</p>
        </Link>

        <Link to="/notes" className={styles.card}>
          <h3>Notes</h3>
          <p>Write and manage notes</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
