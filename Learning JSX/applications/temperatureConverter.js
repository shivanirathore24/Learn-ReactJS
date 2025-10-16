/*
Problem statement
You need to build a React application that converts the temperature from Fahrenheit to Celsius and displays the results
 on the web page. Use paragraph tags to display the converted temperature values, and use an H1 tag for the heading 
 "Temperature convertor".

Test Cases:
The application should render two paragraphs:
The first paragraph should display "Temperature in Fahrenheit: <temperature in Fahrenheit>".
The second paragraph should display "Temperature in Celsius: <temperature in Celsius>".
The application should convert the temperature correctly.

Hint:
<temperature in Fahrenheit> = the actual temperature in fahrenheit.
<temperature in Celsius> = the actual temperature in Celsius.
You can use the given formula to convert the temperature: 
Celsius = (Fahrenheit - 32) * (5 / 9).

Expected Output:
'images' folder --> temperatureConvertor.png

*/

const App = () => {
  const tempInFahrenheit = 12;
  const toCelsius = (t) => (t - 32) * (5 / 9);

  return (
    <>
      <h1>Temperature Converter</h1>
      <p>Temperature in fahrenheit: {tempInFahrenheit}</p>
      <p>Temperature in celsius: {toCelsius(tempInFahrenheit)}</p>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
