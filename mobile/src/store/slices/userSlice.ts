import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../api";
import { TUser } from "@/src/types";

interface IUserState {
  currentUser: TUser | null;
}

const initialState: IUserState = {
  currentUser: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    builder.addMatcher(apiSlice.endpoints.authCallback.matchFulfilled, (state, action: PayloadAction<TUser>) => {
      state.currentUser = action.payload;
    });
  },
});

export const { reducer: userReducer, actions: { clearCurrentUser } } = userSlice;