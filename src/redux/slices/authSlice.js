import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  signupUser,
  editUser,
  addToBookmark,
  removeFromBookmark,
} from "redux/asyncThunks";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  bookmarks: [],
  isBookmarkLoading: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [signupUser.pending]: (state) => {
      state.isLoading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [editUser.pending]: (state) => {
      state.isLoading = true;
    },
    [editUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.user;
    },
    [editUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [addToBookmark.pending]: (state) => {
      state.isBookmarkLoading = true;
    },
    [addToBookmark.fulfilled]: (state, action) => {
      state.isBookmarkLoading = false;
      state.bookmarks = action.payload.data.bookmarks;
    },
    [addToBookmark.rejected]: (state, action) => {
      state.isBookmarkLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [removeFromBookmark.pending]: (state) => {
      state.isBookmarkLoading = true;
    },
    [removeFromBookmark.fulfilled]: (state, action) => {
      state.isBookmarkLoading = false;
      state.bookmarks = action.payload.data.bookmarks;
    },
    [removeFromBookmark.rejected]: (state, action) => {
      state.isBookmarkLoading = false;
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const { logoutUser, updateUser, setLoading } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
