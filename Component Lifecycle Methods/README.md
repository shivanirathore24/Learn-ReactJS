# COMPONENT LIFECYCLE METHODS

## Introduction to Component Lifecycle

### Lifecycle

Lifecycle is the series of stages through which a component passes from the
beginning of its life until its death. The life of the React component starts when it is
born ( Created/Mounted) and ends when it is destroyed (Unmounted).

### Different Phases of a Lifecycle

Different Phases of a component lifecycle are:

- **Mounting:** When a component is being created and inserted into the DOM.
- **Updating:** When a Component is being re-rendered due to any updates
  made to its state or props.
- **Unmounting:** When it is destroyed/ removed from the DOM.
- **Error Handling:** When there is an error during rendering

During the lifecycle of a component, certain methods are called at each phase where
we can execute some logic or perform a side-effect.

<img src="./images/component-lifecycle-methods.png" alt="Component Lifecycle Methods" width="650" height="auto">

### Side effects

Side effects are actions that are not predictable because they are actions that are
performed with the "outside world."

For example: Using Browser APIs like localStorage, using the native DOM methods
instead of the ReactDOM, fetching the data from an API, and setting timeouts and
intervals.

## Mounting Phase

These methods are called in the following sequence when an instance of a
component is being created:

- `constructor()`
- `static getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

### constructor

- A special function that will get called whenever a new component is created.
- It can be used to initialize the state and bind the event handlers.
- This is the only place where the state can be modified directly. Everywhere
  else state should be updated using the`setState` function (used to update the
  state of a component).
  -mAvoid introducing any side effects/subscriptions in the constructor.

#### Example:

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Counter",
      count: 0,
    };

    console.log("Counter Constructor");
  }
}
```

### static getDerivedStateFromProps

- It is invoked right before the render function. This method is invoked in both
  the mounting and updating phases.
- This method exists for rare use cases where the state depends on changes in
  the props over time.If there is no change in state, then this method returns the
  null value.
- It is a static method that does not have any access to this keyword.

#### Example:

It will return an object to update the state. if the props.value is equal to state.counter
then it will return a null value.

<img src="./images/getDerivedStateFromProps.png" alt="Component Lifecycle Methods" width="500" height="auto">

```jsx
static getDerivedStateFromProps(props, state) {
  console.log("Counter getDerivedStateFromProps");

  return { count: props.value };
}
```

### render()

- This is the only required method in the class component. `render()` executes
  during both the mounting and updating phase of the component's lifecycle.
- It is used to render elements to the DOM by returning some JSX.
- The `render()` method must be a pure function, meaning it should not modify
  the component's state, as when the state gets updated, the render method
  gets automatically called, which could lead to infinite looping.
- `render()` will not be invoked if `shouldComponentUpdate()` returns false.

#### Example:

It returns JSX to render your UI and returns null value if there is nothing to render
inside the component.

```jsx
render() {
  console.log("Counter Render");

  return (
    <h1>{this.state.count}</h1>
  );
}
```

### componentDidMount

- It is invoked after a component is mounted. (initially renders on the screen).
- This method is a good place to handle side effects like setting up
  subscriptions and loading data from a remote endpoint.
- You can also use the setState function in this method to update the state.

#### Example:

When the state gets updated inside this method, it causes another rendering just
before the browser updates the UI.

```jsx
componentDidMount() {
  console.log("Counter componentDidMount");

  setTimeout(() => {
    this.setState({ count: 50 });
  }, 1000);
}
```

## Order of Lifecycle Methods

### App.js

```jsx
import React from "react";
import ComponentA from "./ComponentA";

class App extends React.Component {
  render() {
    return <ComponentA />;
  }
}

export default App;
```

The App component simply imports and renders ComponentA, acting as the root component of the application.

### ComponentA.js

```jsx
import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
    };
    console.log("ComponentA constructor!");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateByProps!");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount!");
  }

  render() {
    console.log("ComponentA render!");
    return <h1>{this.state.name}</h1>;
  }
}

export default ComponentA;
```

A class componentA created to demonstrate lifecycle methods:

- **constructor()** initializes the component state with `name: "ComponentA"` and logs a message to show when the constructor is executed.

- **getDerivedStateFromProps()** is a static lifecycle method used to sync state with props. Here it only logs a message and returns `null` since no state update is required.

- **componentDidMount()** runs after the component is mounted to the DOM and logs a message to indicate that the component has been successfully rendered.

- **render()** displays the value of `name` from the state inside an `<h1>` element and logs when rendering occurs.

#### Order of execution of React class component lifecycle methods:

```text
constructor → getDerivedStateFromProps → render → componentDidMount
```

#### 🖥️ What You See in Browser:

<img src="./images/order-of-lifecycle-methods1.png" alt="Order of Lifecycle Methods" width="500" height="auto">

## Lifecycle with Parent–Child Components

### ComponentB.js

```jsx
import React from "react";

class ComponentB extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
    };
    console.log("ComponentB constructor!");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentB getDerivedStateByProps!");
    return null;
  }

  componentDidMount() {
    console.log("ComponentB componentDidMount!");
  }

  render() {
    console.log("ComponentB render!");
    return <h2>{this.state.name}</h2>;
  }
}

export default ComponentB;
```

#### Created a new file ComponentB.js

- Added a separate class component with its own:
  - `constructor`
  - `state`
  - `getDerivedStateFromProps`
  - `componentDidMount`
  - `render`

### ComponentA.js

- Imported ComponentB

  ```diff
  + import ComponentB from "./ComponentB";
  ```

  - Allows ComponentA to use the ComponentB component.

- Rendered ComponentB inside ComponentA

  ```diff
  render() {
    console.log("ComponentA render!");
    return (
  -   <h1>{this.state.name}</h1>
  +   <>
  +     <h1>{this.state.name}</h1>
  +     <ComponentB />
  +   </>
    );
  }
  ```

  - ComponentB is now a child component of ComponentA.

#### Lifecycle Impact (when the app loads)

```text
ComponentA constructor
ComponentA getDerivedStateFromProps
ComponentA render

ComponentB constructor
ComponentB getDerivedStateFromProps
ComponentB render

ComponentB componentDidMount
ComponentA componentDidMount
```

#### Purpose of Change

- Demonstrates parent–child component relationship.

- Shows how lifecycle methods execute when nested components are used.

#### 🖥️ What You See in Browser:

<img src="./images/order-of-lifecycle-methods2.png" alt="Order of Lifecycle Methods" width="500" height="auto">

## Causing Side-Effects

### ComponentA.js

```jsx
import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
      data: [],
    };
    console.log("ComponentA constructor!");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateByProps!");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount!");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    console.log(this.state.data);
    console.log("ComponentA render!");
    return (
      <>
        <h1>{this.state.name}</h1>
        <ul>
          {this.state.data.map((d) => {
            return <li key={d.id}>{d.username}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default ComponentA;
```

#### Explaination:

1. Added State to Store API Data

   ```jsx
   data: [];
   ```

   - A new state variable `data` was introduced to store the list of users fetched from the API. This allows the component to render dynamic data after the API request completes.

2. . Added API Call in `componentDidMount`

   ```jsx
   fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((data) => this.setState({ data }));
   ```

   - The API request is performed inside `componentDidMount()` so that the data is fetched after the component is mounted. This ensures that the UI renders first and then updates when the data is received.

3. Rendering Dynamic Data Using `map`

   ```jsx
   <ul>
     {this.state.data.map((d) => {
       return <li key={d.id}>{d.username}</li>;
     })}
   </ul>
   ```

   - `map()` is used to iterate over the fetched user data and dynamically create list items. The key attribute is added to help React efficiently update the DOM.

### Why Side Effect Is Written in `componentDidMount`

The API call is a side effect because it interacts with an external system (server) and updates the component state asynchronously.

`componentDidMount()` is the correct place because:

- It runs after the component is mounted to the DOM
- It executes only once during the component lifecycle
- It prevents unnecessary repeated API calls

### Issues If Side Effects Are Written Elsewhere

1. If written inside `render()`
   - Problem:
     - `render()` runs every time state changes
     - `setState()` inside API response triggers another render
   - Result:
     ```text
     render → fetch → setState → render → fetch → setState → infinite loop
     ```
   - This causes continuous API calls and performance issues.

2. If written inside `constructor()`
   - Problem:
     - The component is not yet mounted
     - Side effects should not run during state initialization
     - Can lead to unexpected lifecycle behavior

3. If written in `getDerivedStateFromProps()`
   - Problem:
     - This method is \***\*static**
     - Cannot access `this`
     - Must remain a pure function without side effects.

The component was enhanced to demonstrate data fetching, state management, and dynamic rendering. The side effect (API request) was placed in `componentDidMount()` to ensure proper lifecycle behavior and avoid unnecessary or repeated executions.

#### 🖥️ What You See in Browser:

<img src="./images/causing_side-effects.png" alt="Causing Side Effects" width="500" height="auto">

## Updating Phase

Changes to props or state can cause an update. These methods are called in the
foll

- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`
  `shouldComponentUpdate()`

### shouldComponentUpdate()

- `shouldComponentUpdate()` is called as soon as `static
getDerivedStateFromProps()` the method is invoked.
- In the `shouldComponentUpdate()` method, you can return a Boolean value that
  controls whether the component gets rerendered upon a change in
  state/props. It defaults to `true`.
- This method only exists as a performance optimization. Do not rely on it to
  “prevent” a rendering, as this can lead to bugs.

#### Example:

It returns the boolean value true or false if you want to re-render or not.

```jsx
shouldComponentUpdate(nextProps, nextState) {
  console.log("Counter shouldComponentUpdate");

  if (this.state.count == nextState.count) {
    return false;
  }

  return true;
}
```

### getSnapshotBeforeUpdate()

- `getSnapshotBeforeUpdate()` is invoked just after the render() method.
- It stores the previous values of the state after the DOM is updated, meaning
  that even after the update, you can check what the values were before the
  update. Any value returned by this lifecycle method will be passed as a
  parameter to `componentDidUpdate()`.
- Most likely, you’ll rarely reach for this lifecycle method. But it comes in handy
  when you need to grab information from the DOM (and potentially change it)
  just after an update is made, like a chat thread that needs to handle the scroll
  position.
- A snapshot value (or null) should be returned.

#### Example:

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log("Counter getSnapshotBeforeUpdate");
  return prevState.time || null;
}
```

### componentDidUpdate()

- `componentDidUpdate()` is invoked immediately after updating occurs.
  -mIt can operate on the DOM when the component has been updated.
- This is also a good place to do network requests as long as you compare the
  current props to previous props (e.g., a network request may not be
  necessary if the props have not changed).
- It is similar to `componentDidMount()` as you can use `setState`() or fetch API
  call but you have to mention a condition to check if the previous state or props
  has changed or not.

#### Example:

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log("Counter getSnapshotBeforeUpdate");
  return prevState.count || null;
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log("Counter componentDidUpdate");

  if (snapshot !== null) {
    this.setState({ count: 20 });
  }
}
```

## Unmounting Phase

This method is called when a component is being removed from the DOM:

- `componentWillUnmount()`

### componentWillUnmount()

- It is invoked immediately before a component is unmounted and destroyed.
- Perform any necessary cleanup in this method, such as invalidating timers,
  canceling network requests, or cleaning up any subscriptions that were
  created in `componentDidMount()`.
- You should not call `setState()` in `componentWillUnmount()` because the
  component will never be re-rendered. Once a component instance is
  unmounted, it will never be mounted again.

#### Example:

```jsx
componentWillUnmount() {
  if (this.count) {
    clearInterval(this.timer);
  }
}
```
