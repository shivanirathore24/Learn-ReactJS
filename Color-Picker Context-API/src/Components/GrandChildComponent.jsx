import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = (props) => {
  const value = useContext(colorContext); // Fix: Move this inside the curly braces
  console.log(value);

  return <p style={{ color: value }}>Color: {value}</p>;
};

export default GrandChildComponent;
