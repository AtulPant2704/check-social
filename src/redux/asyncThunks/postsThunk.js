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

export { getPosts };
