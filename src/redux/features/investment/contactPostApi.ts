import { baseApi } from "../../api/baseApi";


const contactPostApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        contactPost: builder.mutation({
            query: (data) => ({
                url: "/contact",
                method: "POST",
                data: data
            }),
        }),
    }),
});
export const { useContactPostMutation } = contactPostApi;