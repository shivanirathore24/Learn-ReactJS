import headStyle from "./headingOne.module.css";
function HeadingOne() {
  return (
    <>
      <div className="wrapper">
        <h1>Heading 1</h1>
        <button className= {headStyle.headbtn}>Button1</button>
      </div>
    </>
  );
}

export default HeadingOne;
