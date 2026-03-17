// Redux Todo Example
// Demonstrates basic Redux concepts: actions, reducer, store, and dispatch

const redux = require("redux");

// Action Types → define what kind of operation will happen
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// Action Creators → functions that return action objects
const AddToDo = (text) => ({ type: ADD_TODO, text });
const toggleToDo = (index) => ({ type: TOGGLE_TODO, index });

// Initial State → starting state of the application
const initialState = {
  todos: [],
};

// Reducer → pure function that updates state based on action
function todoReducer(state = initialState, action) {
  switch (action.type) {
    // Add a new todo item
    case ADD_TODO:
      return {
        ...state, // copy existing state
        todos: [
          ...state.todos, // copy existing todos
          {
            text: action.text,
            completed: false, // new todo is not completed
          },
        ],
      };

    // Toggle completion status of a todo
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            return {
              ...todo,
              completed: !todo.completed, // toggle value
            };
          }
          return todo;
        }),
      };

    // Return current state if action type doesn't match
    default:
      return state;
  }
}

// Create Redux store with reducer
const store = redux.createStore(todoReducer);

// Dispatch actions → trigger state changes
store.dispatch(AddToDo("Morning workout at 6 AM"));
store.dispatch(AddToDo("Office work at 9 AM"));
store.dispatch(toggleToDo(0)); // mark workout as completed
store.dispatch(AddToDo("Evening study at 5 PM"));

// Get updated state from store
console.log(store.getState());
