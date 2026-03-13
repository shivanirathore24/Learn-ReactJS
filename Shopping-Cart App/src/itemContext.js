import { createContext, useState, useContext } from "react";
import CartModal from "./components/CardModal";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowcart] = useState(false);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem(item - 1);
  };

  const clear = () => {
    setTotal(0);
    setItem(0);
  };

  const toggle = () => {
    setShowcart(!showCart);
  };

  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, clear, toggle }}
    >
      {showCart && <CartModal toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
