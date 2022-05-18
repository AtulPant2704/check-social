import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getPosts = createAsyncThunk("posts/allPosts", async (rejectWithValue) => {
  try {
    const response = await axios.get("/api/posts");
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    return rejectWithValue({
      data: error.response.data,
      status: error.response.status,
    });
  }
});

const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response,
        status: error.response.status,
      });
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${postData._id}`,
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ post, token }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/posts/${post._id}`, {
        headers: { authorization: token },
      });
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token, setLikeDisable }, { rejectWithValue }) => {
    try {
      setLikeDisable(true);
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    } finally {
      setLikeDisable(false);
    }
  }
);

const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token, setLikeDisable }, { rejectWithValue }) => {
    try {
      setLikeDisable(true);
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    } finally {
      setLikeDisable(false);
    }
  }
);

const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const editComment = createAsyncThunk(
  "posts/editComment",
  async ({ postId, commentId, commentData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { commentData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export {
  getPosts,
  addPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
  addComment,
  editComment,
  deleteComment,
};
