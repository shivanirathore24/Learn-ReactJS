import { useContext } from "react";
import { colorContext } from "../context";

function GrandChildComponent() {
  const color = useContext(colorContext);
  console.log(color);
  return <p style={{ color: color }}>Color: {color}</p>;
}

export default GrandChildComponent;
