import { createSlice } from "@reduxjs/toolkit";
import { getUsers, followUser, unfollowUser } from "redux/asyncThunks";

const initialState = {
  users: [],
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [followUser.pending]: (state) => {
      state.isLoading = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [followUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [unfollowUser.pending]: (state) => {
      state.isLoading = true;
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const { reducer: usersReducer } = usersSlice;
