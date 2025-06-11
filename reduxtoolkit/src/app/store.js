import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// This code imports the configureStore function from Redux Toolkit and a todo reducer from a slice file.
export const store = configureStore({
  reducer: todoReducer,
});
// This code sets up a Redux store using Redux Toolkit's configureStore function.
