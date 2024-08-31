## React Hooks
### Introduction
#### What are hooks?
Hooks are a new addition in React 16.8. They are functions that let you manage the
internal state of component and handle post rendering side effects.

Note: Before we continue, note you can try Hooks in a few components without
rewriting any existing code and hooks are 100% backwards-compatible. They don’t
contain any breaking changes.

Motivation to use hooks -> 
Hooks can be used to address the following problems caused by using class based
components:
1. Hard to reuse stateful logic between components
    - Hooks provide a way to separate stateful logic from a component, which
allows for independent testing and reusability. With Hooks, you can reuse this
logic in multiple components without restructuring the component hierarchy.
This flexibility makes it easy to share Hooks with others and promote
community collaboration.
2. Complex components become difficult to understand
    - In class-based components, related code often gets mixed with unrelated
code, which can lead to bugs and inconsistencies. Hooks address this issue
by allowing you to break down a component into smaller functions that handle
related pieces of logic, like setting up a subscription or fetching data. This
approach is more intuitive than forcing a split based on lifecycle methods.
3. Classes can be confusing at times
    - Classes in React can be a significant hurdle for learning the framework. Not
only do you have to understand how "this" works in JavaScript, which can be
quite different from other languages, but they can also complicate code reuse
and organization. Hooks provide a simpler way to use React's features
without relying on classes. By embracing functions, Hooks allow for a more
intuitive and functional programming style that is closer to the conceptual
nature of React components.

#### Rules of Hooks
The two main rules of Hooks in React are:
1. Only call Hooks at the top level:
    - This rule states that Hooks should only be called at the top level of a function
component or another custom Hook. They should not be called inside loops,
conditions, or nested functions, as this can lead to unexpected behavior and
bugs.
2. Only call Hooks from React function components:
    - This rule states that Hooks can only be used in React function components or
other custom Hooks. They should not be used in class components or regular
JavaScript functions, as this can cause errors or crashes.

Adhering to these rules ensures that Hooks work as intended and can help to
prevent common issues and errors when working with React.

#### Order of Hooks
In React, hooks are executed in the order in which they are written. The order of
Hooks is important. The order in which Hooks are called within a component must
always be the same, so that React can correctly associate state and props with each
Hook.

### State in Function & Class based components
State management in functional and class-based React components is essentially
the same, but the syntax and implementation details differ.
1. Syntax:
    - Class-based components have lifecycle methods, such as componentDidMount
and componentDidUpdate, which allow for fine-grained control over the state and
behavior of the component. Functional components have hooks that let you hook
into the state and lifecycle features of the component but the syntax and
implementation are different.
2. Updates and Side effects:
    - In class-based components, state is updated via the setState method. In functional
components with hooks, state is updated via the update function returned by the
useState hook. Side effects in functional components are managed using the
useEffect hook which is a replacement for the lifecycle methods used in class-based
components, such as componentDidMount and componentDidUpdate.
3. Boilerplate:
    - Class-based components require more boilerplate code to manage state and
lifecycle methods, which can make the code more verbose and harder to read.
Functional components with hooks have less boilerplate code, making them more
concise and easier to read.






### useState() Hook
The useState hook
useState is a React Hook that lets you add a state variable to your component.
1. Parameters
    - Intial State: The useState hook in React takes an initial state as a parameter.
The initial state can be a value of any type. If a function is passed as the initial
state, it will be treated as an initializer function. The initializer function should
be a pure function, taking no arguments, and returning a value of any type.
React will call the initializer function when initializing the component and store
the return value as the initial state.
    - The initial state is only used during the first render and subsequent calls to
useState with a new initial state will override the previous initial state.

2. Returns
The useState hook returns an array with exactly two values:
    - The current state. During the first render, it will match the initialState you have
passed.
    - The set function that lets you update the state to a different value and trigger
a re-render.

Note: Using the state setter function with a callback allows you to access the latest
state value at the time of the update and perform calculations or updates based on
that value. This ensures that the state is always updated correctly and consistently,
regardless of the timing of the updates.


### Code related explaination : useState() Hook
The useState hook is introduced to manage the state of the name and lastName inputs.
This React code creates a simple form with two input fields: one for a first name and one for a last name. As the user types in these fields, the displayed greeting updates dynamically. Key Components ->
1. State Management:
    - The component uses the useState hook to manage two pieces of state: name and lastName.
    - name is initialized to "Shiv" and lastName to "Sati".
    - setName and setLastname are functions used to update the respective state variables.
2. Input Component:
    - The main function component, Input, returns JSX that renders the input form and a greeting.
    - The form includes two labeled input fields, one for the first name and one for the last name.

3. Row Component:
    - Row is a helper component that structures the input fields by wrapping them with a label and a horizontal line.
    - It takes a label prop to display the name of the input field and uses props.children to render the input element passed from the Input component.

4. Input Fields:
    - Each input field is controlled by the corresponding state (name and lastName).
    - The value of each input field is set to the state variable, and onChange events update the state when the user types.

5. Dynamic Greeting:
    - Below the input fields, an h2 element displays a greeting that combines the name and lastName state values.
    - As the user types in the input fields, the state updates, and the greeting changes in real-time.

This component demonstrates basic form handling in React. It shows how to use state to manage input values and how to create a dynamic user interface where the output updates based on user input. The Row component is used to structure the form, making it reusable and clean.


### useEffect() hook
useEffect is a React Hook that lets you synchronize a component with an external
system.

1. Parameters
    - Setup: 
        - The useEffect hook in React takes a function as its first argument,
which contains the logic of your effect. This function may also return a
cleanup function. When your component is initially added to the DOM, React
will execute the setup function you provided in the useEffect hook. On
subsequent re-renders React will first call the cleanup function with the
previous values. After that, React will run your setup function with the new
values.
        - Finally, when your component is removed from the DOM, React will execute
your cleanup function one last time. This ensures that your component's side
effects are properly added and removed throughout its lifecycle.
    - Options (dependencies): 
        - The useEffect hook in React takes a dependency
array as its second argument, which contains all the reactive values
referenced inside the setup code. These values include props, state, and all
variables and functions declared directly in the component body. The list of dependencies must have a constant number of items and be written inline in
the form of [dep1, dep2, dep3].
        - React compares each dependency with its previous value using a comparison
algorithm. If you don't provide the dependency array, your effect will run after
every re-render of the component.

2. Returns -> The useEffect hook does not return an value.

Example 1:Usage of useEffect hook -> useEffect hook to set an interval that increments the
state value of timer after every second. The effect runs only once on mount due to
an empty dependency array.

Example 2: Usage of useEffect hook (with a cleanup function) -> useEffect hook to create a timer that updates every
second. It sets up an interval to update the timer and clears it on unmount using the
cleanup function. The effect runs only once on mount due to an empty dependency
array

### Code related explaination : useEffect() Hook
In the updated code, useEffect is used to update the document title with the name and lastName values.
Key Points:
1. useEffect -> It updates the document's title every time name or lastName changes, acting like both componentDidMount and componentDidUpdate in class components.

2. Commented-out useEffect -> This version would run only once after the initial render (like componentDidMount), updating the title just once.

Summary -> 
The active useEffect runs on every render, updating the title based on user input.
The commented-out version would update the title only once, on component mount.




