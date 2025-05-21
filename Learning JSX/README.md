# LEARNING JSX

## What is JSX?

JSX stands for JavaScript XML. It is syntactic sugar for creating React
Elements. It is a syntax extension to JavaScript. It is used with React to
describe what the UI should look like. JSX may remind you of a template
language, but it comes with the full power of JavaScript. It produces React
“elements.”

#### Example:

```javascript
const element = <h1>Hello world!</h1>;
```

## Why JSX

JSX allows us to write HTML elements in JavaScript and place them in the
DOM without any createElement() and appendChild() methods. JSX
converts HTML tags into react elements. You are not required to use JSX, but
JSX makes it easier to write React applications.

### Without JSX

```javascript
const myElement = React.createElement("h1", {}, "I do not use JSX!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);
```

### With JSX

```javascript
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);
```

- React embraces the fact that rendering logic should be coupled with UI logic.
  It is helpful as a visual aid when working with UI inside the javascript. React
  separates concerns instead of separating technologies. It allows React to
  show more valuable errors and warning messages.
- Babel is a JavaScript Compiler that allows us to use future JavaScript in
  today's browsers. Simply put, it can convert the latest version of JavaScript
  code into the one the browser understands.
  Babel can convert JSX syntax. It is therefore used to convert JSX expressions
  into JavaScript code browsers can understand.
  You can try it yourself.
  [Here is the link](https://babeljs.io/repl/)

## React Fragments

It is a common pattern in React that a component returns multiple elements.
Fragments let you group a list of children without adding extra nodes to the
DOM. We know that we use the render method inside a component whenever
we want to render something to the screen. We may generate single or
multiple elements. However, rendering multiple elements will require a ‘div’ tag
around the content as the render method will only render a single root node
inside it at a time.

#### Example:

```javascript
function App() {
  return (
    <div>
      <h2>Hello</h2>
      <p>How are you doing?</p>
    </div>
  );
}
```

**Reason to use Fragments**: As we saw in the above code, when we are
trying to render more than one root element, we have to put the entire content
inside the ‘div’ tag, which is not a good approach because no one wants to
include an extra div element if that is not required in the code. Hence, Fragments were introduced, and we use them instead of the extraneous ‘div’
tag.

#### Example:

```javascript
function App() {
  return (
    <React.Fragment>
      <h2>Hello</h2>
      <p>How are you doing?</p>
    </React.Fragment>
  );
}
```

**Shorthand Fragment**: The output of the first code and the code above is the
same, but the main reason for using it is that it is a tiny bit faster when
compared to the one with the ‘div’ tag inside it, as we didn’t create any DOM
nodes. Also, it takes less memory. Another shorthand also exists for the above
method in which we use ‘<>’ and ‘</>’ instead of the ‘React.Fragment’.

#### Example:

```javascript
function App() {
  return (
    <>
      <h2>Hello</h2>
      <p>How are you doing?</p>
    </>
  );
}
```

## Embedding Javascript inside JSX

### A Simple Example

```javascript
function App() {
  var name = "Shiv";
  var age = 24;
  let demo = null;
  let undefineValue = undefined;
  let isMarried = false;

  return (
    <>
      <h1>Hello, {name} ! </h1>
      <p> Your age is {age} </p>
      <p> Null value : {demo} </p>
      <p> Undefined value : {undefineValue} </p>
      <p> Boolean value : {isMarried}</p>
      <p> Boolean value : {isMarried.toString()}</p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

#### Code Explanation:

This code defines a React functional component called `App`. The component demonstrates how to embed various JavaScript data types inside JSX.

1. JavaScript Variables:

   ```javascript
   var name = "Shiv";
   var age = 24;
   let demo = null;
   let undefineValue = undefined;
   let isMarried = false;
   ```

   - `name`: A string variable containing the name `"Shiv"`.
   - `age`: A number variable holding the value `24`.
   - `demo`: A variable set to `null`. In JSX, `null` will render nothing.
   - `undefineValue`: A variable set to `undefined`. It also renders nothing in JSX.
   - `isMarried`: A boolean value `false`.

2. JSX:

   Inside the `return` statement, you’re using JSX to render HTML-like elements. You can embed JavaScript variables within curly braces `{}`.

   ```javascript
   return (
     <>
       <h1>Hello, {name} ! </h1>
       <p> Your age is {age} </p>
       <p> Null value : {demo} </p>
       <p> Undefined value : {undefineValue} </p>
       <p> Boolean value : {isMarried}</p>
       <p> Boolean value : {isMarried.toString()}</p>
     </>
   );
   ```

   - `{name}`: Displays the value of `name`, which is `"Shiv"`.
   - `{age}`: Displays the value of `age`, which is `24`.
   - `{demo}`: Since `demo` is `null`, it renders nothing in JSX.
   - `{undefineValue}`: Similarly, `undefined` renders nothing.
   - `{isMarried}`: Displays `false`. Booleans are not automatically rendered in JSX as text.
   - `{isMarried.toString()}`: Converts the boolean `false` to a string `"false"` using `.toString()`, so it gets rendered properly.

3. React Rendering:

   ```javascript
   ReactDOM.createRoot(document.getElementById("root")).render(<App />);
   ```

   This line uses `ReactDOM.createRoot` to render the `App` component into the `root` element in your HTML.

## JSX Expression

With JSX, you can write expressions inside curly braces { }. JSX Expressions,
written inside curly brackets, allow only things that evaluate some value like
string, number, array map method, etc. The expression can be a React
variable, property, or any other valid JavaScript expression. JSX will execute
the expression and return the result.

#### Example:

```javascript
// A simple function that calculates and returns a value
function sum() {
  let a = 3 + 4;
  return a; // returns 7
}

// React functional component
function App() {
  // Data variables to be used in JSX
  var name = "Shivani Rathore";
  let age = 24;

  // Storing a JSX heading element in a constant
  const header = <h2>This is Header</h2>;

  // Returning JSX content wrapped in a Fragment
  return (
    <>
      {/* Render the header JSX element */}
      {header}

      {/* Display name and age dynamically */}
      <p>My name is {name}.</p>
      <p>My age is {age}.</p>

      {/* Call sum() function and display its result */}
      <p>Calling function: {sum()}</p>
    </>
  );
}
```

In JavaScript, a function can only return one value at a time. Since **JSX is just syntactic sugar for JavaScript**, it also follows the same rule ~ it can only return **one parent element**.

To return multiple elements, we must wrap them inside a single outer wrapper. This wrapper is often a `<div>`, but in React, we can also use a Fragment (`<> </>`), which groups elements without adding extra nodes to the DOM.

That’s why in this example, we used a **Fragment** to return multiple elements cleanly.

For example, the code below will throw an error because **JSX expressions must return only one parent element**:

```javascript
function App() {
  return (
      <div>Hello</div>
      <div>World</div>
  );
}
```

### Comments in JSX

To add JavaScript code inside JSX, we need to write it in curly brackets. To
add a comment for that code, then you have to wrap that code in JSX
expression syntax inside the /_ and _/ comment symbols like this:

```javascript
{
  /* <p>This is some text</p> */
}
```

### Null/Undefines/Boolean in JSX

JSX ignores `null`, `undefined`, and `Booleans` (false, true). They don’t render as
JSX is syntactic sugar for `React.createElement(component, props,
...children)`. Let's Understand JSX Rendering of Special Values:

#### For Example

In React JSX, the following expressions:

```javascript
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
```

may look different in code, but they all render the same way in the browser:

```javascript
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### ❓ Why do they render the same?

Because JSX ignores certain JavaScript values inside `{}` when rendering:

- `false`
- `true`
- `null`
- `undefined`

These values do **not produce any visible output** in the DOM. React skips them silently.

#### ✅ How to Show These Values on Screen

If you want to display them (e.g., true, false, null), you must convert them to strings:

```javascript
const myVariable = false;
<div>My JavaScript variable is {String(myVariable)}.</div>;
```

This will correctly render the value as text:

```javascript
<div>My JavaScript variable is false</div>
```

## Functions in JSX

A function can be defined and used by the expression. The component takes the
function's output to produce content. We can simply define a function inside our
component, and we can call it inside the return() method. We can invoke the function
by adding parentheses () at the end.

#### Example:

```javascript
const App = () => {
  const a = 4;
  const b = 6;

  const sum = (a, b) => a + b;

  return (
    <h2>
      Sum of {a} and {b} is: {sum(a, b)}
    </h2>
  );
};
```

## Arrays in JSX

Arrays can be rendered inside the JSX Expressions easily using curly braces
similar to any variable.

#### Example

```javascript
const arr = [1, 2, 3, 4, 5];

const App = () => {
  return <h2>Array is: {arr}</h2>;
};
```

**Output**: Array is: 12345;

### Iterating over the array

We usually use the map function to iterate through the array in React. The
map is a JavaScript function that can be called on any array. With the map
function, we map every element of the array to the custom components in a
single line of code. That means there is no need to call components and their
props array elements repeatedly.

The **.map()** method allows you to run a function on each item in the array,
**returning a new array**. In React, map() can be used to generate lists and
render a list of data to the DOM. To use the map() function, we attach it to an
array we want to iterate over.

#### Example:

```javascript
const myArray = ["apple", "banana", "orange"];

const myList = myArray.map((item, index) => <p key={index}>{item}</p>);
```

**Note**: Keys allow React to keep track of elements. This way, if an item is
updated or removed, only that item will be re-rendered instead of the entire
list. Keys need to be unique to each sibling.

Generally, the key should be a unique ID assigned to each item. As a last
resort, you can use the array index as a key.

### Filter()

The filter() method is an iterative method. It calls a provided callbackFn
function once for each element in an array and constructs a new array of all
the values for which callbackFn returns a truthy value. Array elements that do
not pass the callbackFn test are not included in the new array.

The JavaScript Array filter() Method is used to create a new array from a
given array consisting of only those elements from the given array which
satisfy a condition set by the argument method.

#### Example:

```javascript
function isEven(value) {
  return value % 2 == 0;
}

var originalArr = [11, 98, 31, 23, 944];
var newArr = originalArr.filter(isEven);

console.log(newArr);
```

**Output**: [98,944]

The function passed in the filter function checks whether each element is even
or odd. The filter function then returns only the truthy element; hence, the new
array returned consists of only 2 elements, 98 and 944.

## Objects in JSX

Objects can be defined as an unordered collection of data in the form of “key:
value” pairs. JSX can’t render objects. React has no way to tell what to render
when provided with an object, thus the Invariant Violation error pops up when
attempting so. The error "Objects are not valid as a React child" is standard,
and the solution is to manipulate the object so that it becomes a valid element.

And this is excellent because it now remains in the developer's hand to decide
how to present the data in the object in its application.
#### Example:
```javascript
const App = () => {
  const myVariable = {
    productName: "Watermelon",
    price: 12
  };

  return (
    <div>
      {myVariable.productName} : ${myVariable.price}
    </div>
  );
};
```
And the above code would render a div with the content: Watermelon: $12

### Arrays and Object Rendering in JSX
```javascript
/*Arrays and Object Rendering in JSX*/
function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  let obj = {
    name: "Shiv",
    age: 24,
  };

  return (
    <>
      <h1>Arrays and Objects in Javascript</h1>
      <h2>{arr}</h2>
      {arr.map((num) => (
        <h2>{num}</h2>
      ))}
      <h3>{obj.name}</h3>
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);

/*
1. We cannot directly access object as {obj} inside JSX, it gives error as: Objects are 
not valid as a React child. But object properties are accessible inside JSX.
2. In React, for loop doesn't work becoz for loop doesn't return anything. In order to JSX
to render it on the screen it should return something. 
So, Alternative solution : Map function which returns something.
*/
```
🖥️ What You See in Browser:
```text
Arrays and Objects in Javascript
1,2,3,4,5,6,7
1
2
3
4
5
6
7
Shiv
```
