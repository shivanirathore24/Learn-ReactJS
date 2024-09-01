import { useState, useEffect } from "react";
export default function Input() {
  const [name, setName] = useState("Shivani");
  const [lastName, setLastname] = useState("Rathore");

  //Acts as componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = name + " " + lastName;
  });

  //Will act as only componentDidMount
  // useEffect(() => {
  //   document.title = name + " " + lastName;
  // }, []);

  //Concerns are seperated like displaying name as title and showing window width in two different useEffect hook
  //We have placed timer related code in at one place (unlike class component)
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Window Width:", window.innerWidth);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Row>
      </div>

      <h2>Hello, {name + " " + lastName}</h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
