import { configureStore } from "@reduxjs/toolkit";
import { movieListApi } from "./services/movieListApi";
import sampleSlice from "./features/sampleSlice";
import { sampleApi } from "./services/sampleApi";
import scrollSlice from "./features/scrollSlice";

export const store = configureStore({
  reducer: {
    sampleSlice: sampleSlice,
    scrollSlice: scrollSlice,
    [movieListApi.reducerPath]: movieListApi.reducer,
    [sampleApi.reducerPath]: sampleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieListApi.middleware,
      sampleApi.middleware
    ),
});
