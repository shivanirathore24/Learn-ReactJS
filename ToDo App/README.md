# REDUX IN REACT

## ToDo App: Project SetUp

A simple and interactive ToDo application built with React that allows users to add tasks and toggle their completion status.

This project was initialized using Create React App with the command:

```bash
npx create-react-app todo-app
```

### Folder Structure

```text
todo-app/
│
├── node_modules/        # Installed dependencies
├── public/              # Static files
│
├── src/                 # Main source code
│   ├── components/      # Reusable components
│   │   ├── ToDoForm/
│   │   │   ├── ToDoForm.js
│   │   │   └── ToDoForm.css
│   │   │
│   │   ├── ToDoList/
│   │   │   ├── ToDoList.js
│   │   │   └── ToDoList.css
│   │
│   ├── App.js           # Root component
│   ├── App.css          # App styles
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
│
├── .gitignore           # Git ignored files
├── package.json         # Project metadata & dependencies
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation
```

### index.js (Application Entry Point)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

This file starts the React application and renders it in the browser.

- Imports React and ReactDOM
- Imports global styles (`index.css`)
- Imports the main `App` component
- Creates a root using `ReactDOM.createRoot()`
- Renders `<App />` inside the HTML element with id `"root"`
- Uses `React.StrictMode` to detect potential issues during development

### App.js (Main Controller / State Manager)

```jsx
import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  };

  return (
    <div className="app">
      <h1>To Do App</h1>

      <TodoForm onCreateTodo={createTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
```

his is the core component that manages all application data and logic.

- Uses `useState` to store the list of todos
- `createTodo(text)`:
  - Adds a new task to the list
  - Prevents empty inputs using `trim()`
- `toggleTodo(index)`:
  - Toggles task status (Completed ↔ Pending)
- Passes data and functions to child components:
  - `TodoForm` → receives function to add tasks
  - `TodoList` → receives tasks and toggle function

### components/ToDoForm/ToDoForm.js (Task Input Component)

```jsx
import { useState } from "react";
import "./ToDoForm.css";

function ToDoForm({ onCreateTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter your task..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default ToDoForm;
```

This component handles user input for adding new tasks.

- Uses `useState` to manage input value (`todoText`)
- `handleSubmit()`:
  - Prevents page reload
  - Sends input data to App using `onCreateTodo`
  - Clears the input field after submission
- Input field is controlled via state (`value` and `onChange`)

### components/ToDoList/ToDoList.js (Task Display Component)

```jsx
import "./ToDoList.css";

function ToDoList({ todos, onToggle }) {
  return (
    <div className="list-container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>

            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>

            <button onClick={() => onToggle(index)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
```

his component displays all tasks and allows users to update their status.

- Receives `todos` array from `App`
- Uses `.map()` to render each task
- Displays:
  - Task text
  - Status (Completed or Pending)
- `Toggle` button:
  - Calls `onToggle(index)` to update task status

### Styling Files

- `App.css` → Styles the main layout and overall appearance of the application

- `ToDoForm.css` → Styles the input form, including the field and button

- `ToDoList.css` → Styles the task list, including items and status display

- `index.css` → Provides global styles like fonts, spacing, and default resets

#### 🖥️ What You See in Browser:

<img src="./images/add-task.png" alt="Adding Task" width="600" height="auto">

<img src="./images/todo-task.png" alt="ToDo Task" width="600" height="auto">

## Setting up Actions

### redux/actions/todoActions.js (Redux Actions for Todos)

```jsx
// Action constants
const ADD_TODO = "Add ToDO";
const TOGGLE_TODO = "Toggle Todo";

// Action Creators
export const addTodo = (text) => ({ text, type: ADD_TODO });
export const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });
```

Defines the actions for managing todos in a Redux-based app, including action types and action creators used to handle adding and updating todo items.

- Action constants(`ADD_TODO`, `TOGGLE_TODO`)
  - These are fixed identifiers for different actions.
  - Using constants ensures consistency and prevents typos across reducers and components.

- `addTodo(text)`
  - An action creator that returns an action object to add a new todo.
  - It includes:
    - `type: ADD_TODO` → tells the reducer what to do
    - `text` → the content of the new todo
- `toggleTodo(index)`
  - An action creator that returns an action object to toggle a todo’s status.
  - It includes:
    - `type: TOGGLE_TODO` → indicates toggle operation
    - `index` → identifies which todo to update

## Implementing Reducers

### redux/reducers/todoReducer.js (Todo State Reducer)

```jsx
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initiaState = {
  todos: [],
};

export function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i == action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}
```

Defines the reducer logic for managing todo state in a Redux-based app, handling actions such as adding new todos and toggling their completion status.

- Initial state (`initiaState`)
  - Stores the default state with an empty `todos` array
  - Represents the starting point of the application state
- `todoReducer(state, action)`
  - A reducer function that updates state based on the dispatched action
  - Uses a `switch` statement to handle different action types

- `ADD_TODO` case
  - Adds a new todo to the list
  - Returns a new state object with:
    - Existing todos spread (`...state.todos`)
    - New todo object with:
      - `text` from action
      - `completed: false`

- `TOGGLE_TODO` case
  - Toggles the completion status of a specific todo
  - Uses `map()` to iterate through todos
  - Matches todo by `index` and flips its `completed` value
- Default case
  - Returns the current state if no matching action is found

## Creating Store

Install Redux as a dependency required for state management in the application:

```bash
npm install redux
```

### redux/store.js (Redux Store Configuration)

```jsx
import redux from "redux";
import todoReducer from "./reducers/todoReducer";
export const store = redux.createStore(todoReducer);
```

Defines and configures the Redux store for the application, connecting it with the todo reducer to manage the global state.

- Importing Redux (`redux`)
  - Imports the Redux library to access store creation functionality
  - Uses `createStore` to initialize the central state container
- Importing reducer (`todoReducer`)
  - Connects the reducer that handles todo-related state updates
  - Ensures all dispatched actions are processed through this reducer
- Creating the store (`createStore`)
  - Initializes the Redux store using `todoReducer`
  - The store holds the entire application state (`todos`)
- Exporting the store (`store`)
  - Makes the store available across the application
  - Allows components to access state and dispatch actions
