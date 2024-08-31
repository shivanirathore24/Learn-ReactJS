## React Hooks
### Introduction
What are hooks?
Hooks are a new addition in React 16.8. They are functions that let you manage the
internal state of component and handle post rendering side effects.
Note: Before we continue, note you can try Hooks in a few components without
rewriting any existing code and hooks are 100% backwards-compatible. They don’t
contain any breaking changes.
Motivation to use hooks
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

### useState() Hook
The useState hook in React allows functional components to create and manage local state. It returns a state variable and a function to update that state. When the state changes, the component re-renders, reflecting the updated state in the UI.

The useState hook is introduced to manage the state of the name and lastName inputs.
This React code creates a simple form with two input fields: one for a first name and one for a last name. As the user types in these fields, the displayed greeting updates dynamically.
#### Key Components
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

