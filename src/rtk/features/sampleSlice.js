import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    example: (state, { payload }) => {},
  },
});

export const { example } = sampleSlice.actions;
export default sampleSlice.reducer;
