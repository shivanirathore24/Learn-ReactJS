import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from "react";
import { itemContext } from "../itemContext";

function Navbar() {
  const value = useContext(itemContext);
  console.log(value);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: 0</h1>
    </div>
  );
}

export default Navbar;
