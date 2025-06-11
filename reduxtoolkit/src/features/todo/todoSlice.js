import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Learn Redux Toolkit" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //In redux toolkit we write not only declaration but also implementation of reducers
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generates a unique ID
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
// This code defines a Redux slice for managing a todo list, including actions to add and remove todos.
