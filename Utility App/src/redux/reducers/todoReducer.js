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

// Redux Toolkit Slice (Reducer + Actions)
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

// Export reducer and actions from slice
export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;

// Selector to access todos from Redux store
export const todoSelector = (state) => state.todoReducer.todos;

// Traditional Redux Reducer (Without Toolkit)
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
