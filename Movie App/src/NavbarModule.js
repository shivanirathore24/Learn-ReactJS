import React from "react";
import styles from "./Navbar.module.css";

class NavbarModule extends React.Component {
  render() {
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>MOVIE APP</div>

          <div className={styles.cartIconContainer}>
            <img
              className={styles.cartIcon}
              alt="Cart-Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <span className={styles.cartCount}>5</span>
          </div>
        </div>
      </>
    );
  }
}

export default NavbarModule;
