import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Kanwer Abdull Rahman",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: (id, todo) => {},
  rmvTodo: (id) => {},
  tickMark: (id) => {},
});
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoPrivider = TodoContext.Provider;
