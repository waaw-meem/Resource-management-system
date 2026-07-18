import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        queryLogin: builder.mutation({
            query: (credentials) => ({
                url: 'users',
                method: 'POST',
                body: credentials
            })
        }),
        getUser: builder.query({
            query: () => 'users'
        }
        )
})
});

export const { useGetUserQuery,useQueryLoginMutation } = authApi;