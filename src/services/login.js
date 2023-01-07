import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/user",
  }),

  endpoints: (builder) => ({

   login: builder.mutation({
      query: (body) => ({
        url: "login/",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "signup/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {  useLoginMutation, useRegisterMutation } = loginApi;
