import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={styles.nav}>
        <div style={styles.title}>Movie-App</div>
        <div style={styles.cartIconContainer}>
          <img
            style={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <span style={styles.cartCount}>3</span>
        </div>
      </div>
    );
  }
}

const styles = {
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20,
  },

  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};

export default Navbar;
