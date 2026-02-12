import { API_BASE_URL } from '@/config/env'
import { getClerkInstance } from '@clerk/clerk-expo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Chat, TUser } from '../types';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ['Chats'],
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
    getChats: build.query<Chat[], void>({
      query: () => ({
        url: `/chats`,
      }),
      providesTags: ['Chats'],
    }),
    getUsers: build.query<TUser[], string>({
      query: (term) => ({
        url: `/users?q=${encodeURIComponent(term)}`,
      }),
    }),
    getOrCreateChat: build.mutation<Chat, { participantId: string }>({
      query: ({ participantId }) => ({
        url: `/chats/with/${participantId}`,
        method: 'POST',
        body: { participantId },
      }),
      invalidatesTags: ['Chats']
    }),
  }),
})

export const { useAuthCallbackMutation, useGetChatsQuery, useGetUsersQuery, useGetOrCreateChatMutation } = apiSlice;