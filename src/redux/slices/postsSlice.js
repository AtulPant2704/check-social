import { createSlice } from "@reduxjs/toolkit";
import { getPosts, addPost, editPost, deletePost } from "redux/asyncThunks";

const initialState = {
  posts: [],
  isLoading: false,
  status: "idle",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setBtnLoading: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.posts = action.payload.data.posts;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
      console.error(action.payload.data.errors[0]);
    },
    [addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload.data.posts);
      state.posts = action.payload.data.posts;
    },
    [editPost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const { setBtnLoading } = postsSlice.actions;
export const { reducer: postsReducer } = postsSlice;
