import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { userReducer } from './slices'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch