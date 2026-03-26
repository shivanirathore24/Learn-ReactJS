// Import createSlice & createAsyncThunk from Redux Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

// Initial state containing default todos
const initialState = {
  todos: [],
};

// Get todos from backend
export const getInitialState = createAsyncThunk(
  "todo/getInitialState",
  // async (_, thunkAPI) => {
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/todos");
  //     thunkAPI.dispatch(actions.setInitialState(res.data));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  () => {
    return axios.get("http://localhost:5000/api/todos");
  },
);

//Way-1
// export const addTodo = createAsyncThunk("todo/addTodo", async (payload) => {
//   const res = await fetch("http://localhost:5000/api/todos", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       text: payload,
//     }),
//   });
//   const data = await res.json();
//   return data;
// });

//Way-2
// Add todo to backend
export const addTodo = createAsyncThunk("todo/addTodo", async (payload) => {
  console.log("Sending todo:", payload);
  const res = await axios.post("http://localhost:5000/api/todos", {
    text: payload,
  });
  console.log("Response from backend:", res.data);
  return res.data;
});

// Toggle todo status in backend
export const toggleTodo = createAsyncThunk("todo/toggleTodo", async (id) => {
  console.log("Toggling todo with id:", id);
  const res = await axios.put(`http://localhost:5000/api/todos/${id}`);
  console.log("Toggle response:", res.data);
  return res.data;
});

// Redux Toolkit Slice (Reducer + Actions)
const todoSlice = createSlice({
  name: "todo",
  initialState,

  // Local reducers (not used with backend)
  reducers: {
    setInitialState: (state, action) => {
      state.todos = [...action.payload];
    },

    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },

    toggle: (state, action) => {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  // Handle async thunk results
  extraReducers: (builder) => {
    builder
      .addCase(getInitialState.fulfilled, (state, action) => {
        console.log("getInitialState is fulfilled!");
        console.log(action.payload);
        state.todos = [...action.payload.data];
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        console.log("Added todo in reducer:", action.payload);
        state.todos.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        console.log("Toggle updated in reducer:", action.payload);
        const updatedTodo = action.payload;
        const index = state.todos.findIndex(
          (todo) => todo._id === updatedTodo._id,
        );
        if (index !== -1) {
          state.todos[index] = updatedTodo;
        }
      });
  },
});

// Export reducer and actions from slice
export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions; // not used in backend flow

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
