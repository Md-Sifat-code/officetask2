import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath : 'baseApi',
    baseQuery : fetchBaseQuery({baseUrl : "https://eddmwd-server.onrender.com"}),
    tagTypes:['donations','testimonials','comments','volunteers'],
    endpoints : () => ({
     
    }),
})
