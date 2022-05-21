import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  signupUser,
  editUser,
  addToBookmark,
  removeFromBookmark,
  getUserBookmarks,
} from "redux/asyncThunks";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  bookmarks: [],
  isLoading: false,
  bookmarkStatus: "idle",
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
      state.user = action.payload.data.createdUser;
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
      state.isLoading = true;
    },
    [addToBookmark.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookmarks = action.payload.data.bookmarks;
    },
    [addToBookmark.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [removeFromBookmark.pending]: (state) => {
      state.isLoading = true;
    },
    [removeFromBookmark.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookmarks = action.payload.data.bookmarks;
    },
    [removeFromBookmark.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [getUserBookmarks.pending]: (state) => {
      state.bookmarkStatus = "pending";
    },
    [getUserBookmarks.fulfilled]: (state, action) => {
      state.bookmarkStatus = "resolved";
      state.bookmarks = action.payload.data.bookmarks;
    },
    [getUserBookmarks.rejected]: (state, action) => {
      state.bookmarkStatus = "rejected";
      console.error(action);
    },
  },
});

export const { logoutUser, updateUser, setLoading } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
