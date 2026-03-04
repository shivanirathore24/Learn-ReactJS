import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: 70,
            background: "lightblue",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="title">Movie-App</div>
          <div>
            <img alt="cart icon" />
            <span>3</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
