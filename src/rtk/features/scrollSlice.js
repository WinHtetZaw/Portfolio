import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  titleTopScroll: 0,
  aboutTopScroll: 0,
  projectTopScroll: 0,
};

export const scrollSlice = createSlice({
  name: "scrollSlice",
  initialState,
  reducers: {
    setTitleTopScroll: (state, { payload }) => {
      state.titleTopScroll = payload;
    },
    setAboutTopScroll: (state, { payload }) => {
      state.aboutTopScroll = payload;
    },
    setProjectTopScroll: (state, { payload }) => {
      state.projectTopScroll = payload;
    },
  },
});

export const { setAboutTopScroll, setProjectTopScroll, setTitleTopScroll } =
  scrollSlice.actions;
export default scrollSlice.reducer;
