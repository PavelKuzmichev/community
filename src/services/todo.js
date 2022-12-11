import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/track",
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "all/"
    }),
  }),
});

export const { useGetAllTodosQuery } = todoApi;