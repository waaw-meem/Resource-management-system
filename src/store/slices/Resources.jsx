import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const resourcesApi = createApi({
    reducerPath: 'resourcesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getResources: builder.query({
            query: () => 'resources'
        }),
        addUser: builder.mutation({
            query: (newUser) => ({
                url: "resources",
                method: "POST",
                body: newUser
            })
        })
    })
})

export const { useGetResourcesQuery, useAddUserMutation } = resourcesApi