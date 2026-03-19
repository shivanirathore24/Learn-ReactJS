// Action constants
const ADD_TODO = "Add ToDO";
const TOGGLE_TODO = "Toggle Todo";

// Action Creators
export const addTodo = (text) => ({ text, type: ADD_TODO });
export const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });
