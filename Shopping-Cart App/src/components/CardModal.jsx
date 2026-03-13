import React from "react";
import styles from "../styles/CartModal.module.css";

function CartModal() {
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton}>Close</div>
      <div className={styles.clearButton}>Clear</div>
      <div className={styles.itemContainer}></div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
