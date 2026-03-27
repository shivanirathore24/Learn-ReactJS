// Import createSlice & createAsyncThunk from Redux Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

// Initial state
const initialState = {
  notes: [],
};

// Fetch notes from backend
export const getNotes = createAsyncThunk("note/getNotes", async () => {
  const res = await axios.get("http://localhost:5000/api/notes"); // ✅ CHANGED
  return res.data; // axios gives data directly
});

// Add note to backend
export const addNote = createAsyncThunk("note/addNote", async (payload) => {
  const res = await axios.post("http://localhost:5000/api/notes", {
    text: payload,
  });

  return res.data;
});

// Delete note from backend
export const deleteNote = createAsyncThunk("note/deleteNote", async (id) => {
  await axios.delete(`http://localhost:5000/api/notes/${id}`); // ✅ CHANGED
  return id; // return deleted id
});

// Redux Toolkit Slice (Reducer + Actions)
const noteSlice = createSlice({
  name: "note",
  initialState,

  // Local reducers (not used with backend)
  reducers: {
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date(),
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
  // Handle async thunk results
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.fulfilled, (state, action) => {
        console.log("getNotes fulfilled:", action.payload);
        state.notes = action.payload;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        console.log("addNote fulfilled:", action.payload);
        state.notes.push(action.payload);
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        console.log("deleteNote fulfilled:", action.payload);
        state.notes = state.notes.filter((note) => note._id !== action.payload);
      });
  },
});

// Export reducer and actions from slice
export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions; // (not used now)

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
