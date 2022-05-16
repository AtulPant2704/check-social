import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postsReducer, usersReducer } from "redux/slices";

const store = configureStore({
  reducer: { auth: authReducer, posts: postsReducer, users: usersReducer },
});

export { store };
