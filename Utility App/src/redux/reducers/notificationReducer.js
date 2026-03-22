import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.add, (state, action) => {
      state.message = "Todo is created!";
    });
  },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
