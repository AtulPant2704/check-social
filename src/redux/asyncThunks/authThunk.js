import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk("auth/login", async (newUser) => {
  const response = await axios.post("/api/auth/login", newUser);
  const data = { data: response.data, status: response.status };
  return data;
});

const signupUser = createAsyncThunk("auth/signup", async (newUser) => {
  const response = await axios.post("/api/auth/signup", newUser);
  const data = { data: response.data, status: response.status };
  return data;
});

export { loginUser, signupUser };
