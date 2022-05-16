import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "redux/slices";

const store = configureStore({
  reducer: { auth: authReducer },
});

export { store };
