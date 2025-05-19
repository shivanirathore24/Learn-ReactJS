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
