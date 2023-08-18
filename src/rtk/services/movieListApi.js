import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieListApi = createApi({
  reducerPath: "movieListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/movie" }),
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: () => `/popular?api_key=75646841a0d1a2eb783fc0ad070dcec4&language=en-US&page=1`,
    }),
  }),
});

export const {getPopular} = movieListApi;
