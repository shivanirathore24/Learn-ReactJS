//import { useContext } from "react";
import { colorContext } from "../context";

function GrandChildComponent() {
  // const value = useContext(colorContext);
  // console.log(value.color);
  // return <p style={{ color: color }}>Color: {value.color}</p>;

  return (
    <colorContext.Consumer>
      {(value) => <p style={{ color: value.color }}>Color: {value.color}</p>}
    </colorContext.Consumer>
  );
}

export default GrandChildComponent;
