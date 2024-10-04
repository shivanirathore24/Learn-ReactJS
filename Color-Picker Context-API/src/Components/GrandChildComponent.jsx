import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = (props) => {
  const value = useContext(colorContext); // Fix: Move this inside the curly braces
  console.log(value.color);

  return (
    <colorContext.Consumer>
    {(value) => <p style={{ color: value.color }}>Color: {value.color}</p>}
    </colorContext.Consumer>
  )
};

export default GrandChildComponent;
