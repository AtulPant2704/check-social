import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getPosts = createAsyncThunk("posts/allPosts", async () => {
  const response = await axios.get("/api/posts");
  const data = { data: response.data, status: response.status };
  return data;
});

export { getPosts };
