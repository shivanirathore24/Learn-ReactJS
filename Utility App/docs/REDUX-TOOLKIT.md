# REDUX TOOLKIT

## Introduction

Redux is a state management library that helps manage application states in a
predictable and consistent manner. It is widely used in modern web development
with React and has been an essential tool for building scalable and maintainable
applications. However, working with Redux can sometimes be challenging,
especially when it comes to setting up and managing reducers, actions, and
selectors. To address these challenges, the Redux team has released Redux Toolkit,
a package that simplifies the process of setting up and using Redux.

### Challenges with Redux

- **Boilerplate Code**: Setting up Redux involves a lot of boilerplate code. You
  must create separate files for actions, reducers, and store configuration. This
  can be time-consuming and error-prone.
- **Complex Reducers**: Writing complex reducers can be difficult, especially
  when dealing with nested data structures or asynchronous actions.
- **Debugging**: Debugging Redux applications can be challenging, especially
  when dealing with large and complex application states

## Redux Toolkit library

Redux Toolkit provides a streamlined way of working with Redux, eliminating many
of the common pain points of building large-scale Redux applications. It is designed
to be backward-compatible with existing Redux code, making it easy to adopt and
integrate into existing projects. Some of its key features include:

- A "slice" API that simplifies the process of creating Redux reducers
- A "createAsyncThunk" API that simplifies the process of handling
  asynchronous actions
- A simplified and standardized file structure for Redux code
- Automatic generation of Redux actions and reducers for common use cases
- A collection of other useful utilities and middleware for Redux.

## Migrating from Redux to Redux Toolkit

### Install Redux Toolkit

Start by installing Redux Toolkit in your application by running the command:

```bash
npm install @reduxjs/toolkit
```

### Creating Slices

Replace your existing Redux actions and reducers with "slices," which are
predefined Redux logic blocks in Redux Toolkit. You can create slices using the
createSlice() function provided by Redux Toolkit.
To define a slice using createSlice, you need to call the function and pass in an
object that contains the name, initialState, and reducers properties.

- **name**: This property is used to define the name of the slice. It is used to
  generate the action types for the slice automatically and to create action
  creators with the correct names.
- **initialState**: This property is used to define the initial state of the slice. It is
  used to set the initial state of the store when it is first created.
- **reducers**: This property defines a set of reducer functions that can update the
  slice's state. It takes an object as an argument where each key-value pair
  represents a case reducer. The key is the name of the action, and the value is
  a function that updates the state. When an action is dispatched, the
  corresponding reducer function will be called, and the slice's state will be
  updated accordingly. The payload property of the action object can be
  accessed using action.payload inside the reducer functions.

```jsx
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i == action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});
```

### Migrating Store

Replace your existing store creation code with the `configureStore()` function provided
by Redux Toolkit. This function simplifies the store creation process by automatically
adding common middleware and other settings.

```jsx
export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
  },
});
```

### Dispatching Actions

The actions object is exported separately from the reducer

```jsx
export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
```

You can use this object to access your actions by importing them and passing them
as arguments to the dispatch function.

```jsx
<button
  className="btn btn-warning"
  onClick={() => {
    disptach(actions.toggle(index));
  }}
>
  Toggle
</button>
```

### Setting Up Selectors

You can define a new selector function called todoSelector, which extracts the
todoReducer slice of the state.

```jsx
// selector
export const todoSelector = (state) => state.todoReducer.todos;
```

Once you have defined your selectors, you can use the useSelector hook from the
react-redux library to access the selected data in your components.

## Creating Slices

`createSlice` is a function from Redux Toolkit that simplifies Redux by combining reducers and actions in one place, reducing boilerplate and making state management easier.

### redux/reducers/todoReducer.js (Migration to Redux Toolkit Slice)

```jsx
// Import createSlice from Redux Toolkit
const { createSlice } = require("@reduxjs/toolkit");
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

// Initial state containing default todos
const initialState = {
  todos: [
    {
      text: "Study mathematics at 6 AM",
      completed: true,
    },
    {
      text: "Evening workout at 5 PM",
      completed: false,
    },
  ],
};

// ================= Redux Toolkit Slice (Reducer + Actions) =================
const todoSlice = createSlice({
  name: "todo", // Slice name (used as action prefix)
  initialState,

  reducers: {
    // Add a new todo item
    add: (state, action) => {
      state.todos.push({
        text: action.payload, // Todo text
        completed: false, // Default status
      });
    },

    // Toggle completion status of a todo by index
    toggle: (state, action) => {
      const todo = state.todos[action.payload]; // Get todo by index
      if (todo) {
        todo.completed = !todo.completed; // Flip completed status
      }

      // Alternative approach using map (not recommended here)
      // state.todos.map((todo, i) => {
      //   if (i === action.payload) {
      //     todo.completed = !todo.completed;
      //   }
      //   return todo;
      // });
    },
  },
});

// ---------------- Traditional Redux Reducer (Without Toolkit) ----------------
// export function todoReducer(state = initialState, action) {
//   switch (action.type) {

//     // Add a new todo
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };

//     // Toggle todo status by index
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i === action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };

//     default:
//       return state;
//   }
// }
```

Refactors the todo reducer from traditional Redux (`switch-case ` with separate actions) to Redux Toolkit using `createSlice`, reducing boilerplate and improving code readability.

- Replaced traditional reducer with `createSlice`
  - Removed `switch-case` logic and manual action handling
  - Combined reducer logic and actions inside a single slice
- Eliminated action constants and creators
  - No need for `ADD_TODO`, `TOGGLE_TODO` or separate action files
  - Actions are auto-generated from slice (`add`, `toggle`)
- Simplified state updates
  - Direct mutations like `state.todos.push()` are allowed
  - Redux Toolkit internally uses Immer to maintain immutability
- Optimized toggle logic
  - Accesses todo directly using index instead of iterating with `map()`
  - Makes logic more efficient and easier to read
- Improved code structure
  - Cleaner and more maintainable reducer setup
  - Easier to scale with additional features

### edux/reducers/noteReducer.js (Migration to Redux Toolkit Slice)

```jsx
// Import createSlice from Redux Toolkit
const { createSlice } = require("@reduxjs/toolkit");
//import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

// Initial state containing default notes
const initialState = {
  notes: [
    {
      text: "Revise core React concepts including components, props, state management, hooks like useState and useEffect, and understand component lifecycle for better application structure.",
      createdOn: new Date(),
    },
    {
      text: "Prepare detailed notes for Redux covering store, actions, reducers, dispatch flow, and middleware, along with practical examples for better understanding.",
      createdOn: new Date(),
    },
  ],
};

// ================= Redux Toolkit Slice (Reducer + Actions) =================
const noteSlice = createSlice({
  name: "note", // Slice name (used as action prefix)
  initialState,

  reducers: {
    // Add a new note with current timestamp
    add: (state, action) => {
      state.notes.push({
        text: action.payload, // Note content
        createdOn: new Date(), // Auto-generate creation time
      });
    },

    // Delete a note by index
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

// ---------------- Traditional Redux Reducer (Without Toolkit) ----------------
// export function noteReducer(state = initialState, action) {
//   switch (action.type) {

//     // Add a new note
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [
//           ...state.notes,
//           {
//             text: action.text,
//             createdOn: new Date(),
//           },
//         ],
//       };

//     // Delete a note by index
//     case DELETE_NOTE:
//       state.notes.splice(action.index, 1); // Mutating original state (not recommended)
//       return {
//         ...state,
//         notes: [...state.notes], // Return updated copy
//       };

//     default:
//       return state;
//   }
// }
```

Refactors the note reducer to use Redux Toolkit, simplifying note management by combining reducer logic and actions while removing manual state handling.

- Replaced `switch-case` with `createSlice`
  - Removed manual reducer logic and action type checks
  - Centralized add and delete logic inside slice
- Removed action constants and creators
  - No need for `ADD_NOTE`, `DELETE_NOTE`
  - Actions are automatically generated (`add`, `delete`)
- Simplified note creation
  - Directly pushes new note into state
  - Automatically assigns current timestamp
- Improved delete logic
  - Uses `splice()` directly on state
  - No need to create new array manually
- Cleaner and scalable structure
  - Less boilerplate code
  - Easier to extend (edit, search, filter notes later)

#### Overall Summary

- Migrated from **manual Redux → Redux Toolkit (createSlice)**
- Reduced boilerplate by removing:
  - Action constants
  - Action creators
  - Switch-case reducers
- Simplified state updates using **direct mutation (handled internally by Immer)**
- Improved readability, maintainability, and scalability of reducers
- Unified **actions + reducers into single slices** for better architecture
