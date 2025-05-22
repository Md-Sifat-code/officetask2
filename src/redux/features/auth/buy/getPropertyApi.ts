import { baseApi } from "../../../api/baseApi";


const getAllPropertiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProperties: builder.query({
      query: () => ({
        url: "/properties",
        method: "GET",
      }),
    }),
  }),
});
export const { useAllPropertiesQuery } = getAllPropertiesApi;