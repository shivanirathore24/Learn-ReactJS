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
