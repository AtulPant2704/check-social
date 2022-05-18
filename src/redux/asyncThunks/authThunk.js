import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk(
  "auth/login",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", newUser);
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

const signupUser = createAsyncThunk(
  "auth/signup",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signup", newUser);
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

const editUser = createAsyncThunk(
  "auth/edit",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/users/edit",
        { userData },
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

const addToBookmark = createAsyncThunk(
  "user/addBookmark",
  async ({ postId, token, setBookmarkDisable }, { rejectWithValue }) => {
    try {
      setBookmarkDisable(true);
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
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
      setBookmarkDisable(false);
    }
  }
);

const removeFromBookmark = createAsyncThunk(
  "user/deleteBookmark",
  async ({ postId, token, setBookmarkDisable }, { rejectWithValue }) => {
    try {
      setBookmarkDisable(true);
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
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
      setBookmarkDisable(false);
    }
  }
);

const getUserBookmarks = createAsyncThunk(
  "user/bookmarks",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users/bookmark", {
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

export {
  loginUser,
  signupUser,
  editUser,
  addToBookmark,
  removeFromBookmark,
  getUserBookmarks,
};
