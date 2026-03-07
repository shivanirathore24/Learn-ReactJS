# REACT HOOKS

## Introduction

### What are hooks?

Hooks are a new addition in React 16.8. They are functions that let you manage the
internal state of component and handle post rendering side effects.

**Note:** Before we continue, note you can try Hooks in a few components without
rewriting any existing code and hooks are 100% backwards-compatible. They don’t
contain any breaking changes.

### Motivation to use hooks

Hooks can be used to address the following problems caused by using class based
components:

1. **Hard to reuse stateful logic between components**
   - Hooks provide a way to separate stateful logic from a component, which
     allows for independent testing and reusability. With Hooks, you can reuse this
     logic in multiple components without restructuring the component hierarchy.
     This flexibility makes it easy to share Hooks with others and promote
     community collaboration.

2. **Complex components become difficult to understand**
   - In class-based components, related code often gets mixed with unrelated
     code, which can lead to bugs and inconsistencies. Hooks address this issue
     by allowing you to break down a component into smaller functions that handle
     related pieces of logic, like setting up a subscription or fetching data. This
     approach is more intuitive than forcing a split based on lifecycle methods.

3. **Classes can be confusing at times**
   - Classes in React can be a significant hurdle for learning the framework. Not
     only do you have to understand how "this" works in JavaScript, which can be
     quite different from other languages, but they can also complicate code reuse
     and organization. Hooks provide a simpler way to use React's features
     without relying on classes. By embracing functions, Hooks allow for a more
     intuitive and functional programming style that is closer to the conceptual
     nature of React components.

### Recap: React State in Class Components

#### InputWithClassComponent.js

```jsx
import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastname = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input value={this.state.name} onChange={this.handleName} />
          </Row>
          <Row label="Last Name">
            <input value={this.state.lastName} onChange={this.handleLastname} />
          </Row>
        </div>

        <h2>Hello, {this.state.name + " " + this.state.lastName}</h2>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
```

- Created a class component Input to manage form inputs using React state.

- Added two state variables: name and lastName.

- Implemented handleName and handleLastname functions to update state when the user types in the input fields.

- Used controlled components where the input values are controlled by React state.

- Displayed a greeting message (Hello, Name LastName) that updates dynamically as the user types.

- Created a reusable Row functional component to render a label and input field using props.children.

#### App.js

```jsx
import Input from "./InputWithClass";

function App() {
  return (
    <>
      <Input />
    </>
  );
}

export default App;
```

- Imported the Input component.

- Rendered the Input component inside the App component to display the input fields and greeting message in the application.

#### 🖥️ What You See in Browser:

<img src="./images/state_class-component.png" alt="React State in Class Components" width="700" height="auto">
