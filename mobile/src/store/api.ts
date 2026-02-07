import { API_BASE_URL } from '@/config/env'
import { getClerkInstance } from '@clerk/clerk-expo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL, 
    prepareHeaders: async (headers) => {
      const clerk = getClerkInstance();
      const token = await clerk.session?.getToken();

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      headers.set('Content-Type', 'application/json')
      return headers
    }, 
  }),
  endpoints: (build) => ({
    authCallback: build.mutation({
      query: () => ({
        url: '/auth/callback',
        method: 'POST',
      }),
    }),
  }),
})

export const { useAuthCallbackMutation } = apiSlice;