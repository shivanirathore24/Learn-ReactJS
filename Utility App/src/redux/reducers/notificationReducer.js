import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./todoReducer";
import { actions as noteActions } from "./noteReducer";

const initialState = {
  message: "",
  type: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = "";
      state.type = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // TODO ADD
      .addCase(addTodo.fulfilled, (state) => {
        state.message = "Todo is created!";
        state.type = "success";
      })

      // NOTE ADD
      .addCase(noteActions.add, (state) => {
        state.message = "Note is created!";
        state.type = "success";
      })

      // NOTE DELETE
      .addCase(noteActions.delete, (state) => {
        state.message = "Note is deleted!";
        state.type = "danger";
      });
  },
});

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;

export const notificationSelector = (state) => state.notificationReducer;
