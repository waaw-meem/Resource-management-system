import { configureStore } from "@reduxjs/toolkit";
import { authApi } from './slices/AuthSlice';
import { resourcesApi } from './slices/Resources';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [resourcesApi.reducerPath]: resourcesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, resourcesApi.middleware),
})