/*
Problem statement
Create a React app and utilize the ES6+ array iteration method to filter the even number from the array and render them.

Hint:
Use the map and filter function to render the even numbers.

Expected Output:
'images' folder --> arrayFilter.png

Test Cases:
The app should render the data correctly
For the given array, 6 elements should be rendered on the screen using the h3 tag, and the rendered item should be even.
*/

const App = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h1>ES6 Array Iteration Methods</h1>
      {numbers
        .filter((n) => n % 2 === 0)
        .map((n) => (
          <h3>{n}</h3>
        ))}
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);

/* Changed the map function's arrow function to a concise implicit return by using 
parentheses () around the JSX element to return it implicitly. */
