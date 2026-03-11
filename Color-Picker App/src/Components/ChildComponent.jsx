import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => (
  <div
    style={{
      border: `10px solid #000000`,
      margin: "50px",
      padding: "10px",
      fontSize: "30px",
      width: "300px",
    }}
  >
    <GrandChildComponent color={props.color} />
  </div>
);

export default ChildComponent;
