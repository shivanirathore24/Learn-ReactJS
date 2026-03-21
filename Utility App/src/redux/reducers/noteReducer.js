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

// Redux Toolkit Slice (Reducer + Actions)
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

// Export reducer and actions from slice
export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;

// Export reducer and actions from slice
export const noteSelector = (state) => state.noteReducer.notes;

// Traditional Redux Reducer (Without Toolkit)
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
