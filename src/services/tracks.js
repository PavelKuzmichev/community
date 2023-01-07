import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/track",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => "all/"
    }),
  }),
});

export const { useGetAllTracksQuery } = tracksApi;