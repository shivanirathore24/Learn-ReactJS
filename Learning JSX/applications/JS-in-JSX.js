/*
Problem statement
Complete the App component to render the given data using paragraph tags for text and an H1 tag for the heading.

Test Cases:
App should render the data correctly

Expected Output:
'images' folder --> js-in-jsx.png

Create a heading using the h1 tag with content: 
"{name} Basic Info".
There should be three paragraphs to show age, hobby and ismarried variable defined in the App component.
To display a boolean value you can use the  .toString() method on the variable to convert it into a string.
*/

const App = () => {
  const name = "Shivani";
  const age = 24;
  const hobby = "JavaScript";
  const isMarried = false;

  return (
    <>
      <h1> {name}'s Basic Info: </h1>
      <p> My age is {age}</p>
      <p> I like {hobby} a lot! </p>
      <p> Am i married?: {isMarried.toString()} </p>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
