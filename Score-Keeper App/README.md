# MINI-PROJECT: SCORE- KEEPER

## Events in JSX

Handling events with React elements is very similar to handling events on DOM
elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

### For example

#### In HTML:

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

#### In React: Slightly different

```jsx
<button onClick={activateLasers}>Activate Lasers</button>
```

Another difference is that you cannot return false to prevent default behavior in
React. You must call preventDefault explicitly. For example, with plain HTML, to
prevent the default form behavior of submitting, you can write:

```jsx
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

In React, this could instead be:

```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Here, e is a synthetic event. React defines these synthetic events, so you don’t need
to worry about cross-browser compatibility. React events do not work the same as
native events. See the [SyntheticEvent](https://legacy.reactjs.org/docs/events.html) reference guide to learn more.
When using React, you generally don’t need to call addEventListener to add
listeners to a DOM element after it is created. Instead, just provide a listener when
the element is initially rendered.

### Score-Keeper App: Events in JSX

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Score-Keeper App</title>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root" style="text-align: center"></div>

    <script type="text/babel">
      let score = 0;
      let wicket = 0;

      function clickOne() {
        alert("1 is clicked!");
      }

      const App = () => (
        <>
          <h1>SCORE KEEPER</h1>
          <h2>
            SCORE: {score}/{wicket}
          </h2>
          <div>
            <button onClick={clickOne}>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>Wicket</button>
          </div>
        </>
      );
      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);
    </script>
  </body>
</html>
```

#### 🖥️ What You See in Browser:

<img src="./images/click-button-1.png" alt="Click Button 1" width="600" height="auto">
<img src="./images/events-in-jsx.png" alt="Events in JSX" width="600" height="auto">

## Virtual DOM

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”,
representation of a UI is kept in memory and synced with the “real” DOM by a library
such as ReactDOM. This process is called reconciliation.
In reality, the virtual DOM is just an organized collection of React elements — plain
objects, and it mimics the browser DOM in a way that is easier to maintain and
update.
Let‘s take a step back and check out an example of a React element.

```jsx
const title = <h1>Hello, world!</h1>;
```

JSX does the heavy lifting to convert the familiar HTML syntax into a React element.
Without JSX, this is just:

```jsx
const title = React.createElement("h1", null, "Hello, world!");
```

And below is the created React element under the hood.

```jsx
{
  "type": "h1",
  "props": {
    "children": "Hello, world!"
  }
}
```

### Score-Keeper App: Virtual DOM 

```jsx
 <body>
    <div id="root" style="text-align: center"></div>

    <script type="text/babel">
      let score = 0;
      let wicket = 0;

      function addOne() {
        score += 1;
        rootElement.render(<App />);
        console.log(score);
      }

      const App = () => (
        <>
          <h1>SCORE KEEPER</h1>
          <h2>
            SCORE: {score}/{wicket}
          </h2>
          <div>
            <button onClick={addOne}>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>Wicket</button>
          </div>
        </>
      );
      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);
    </script>
  </body>
```

#### 🖥️ What You See in Browser:

<img src="./images/virtual-DOM.png" alt="Virtual DOM under the hood" width="600" height="auto">
