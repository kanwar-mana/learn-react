import "./App.css";
import { TodoPrivider } from "./context";
import TodoFormUi from "./components/TodoFormUi";
import TodoItemUi from "./components/TodoItemUi";
import { useTodo } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  // function to add the todo in list

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  // Function to update the todo

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((eachprev) => (eachprev.id === id ? todo : eachprev))
    );
  };
  // Function to remove the todo from list

  const rmvTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  //Function when we checked on it it overline through text in it

  const tickMark = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  // Get data from localStorage

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // set item data into local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoPrivider
      value={{ todos, useTodo, addTodo, rmvTodo, updateTodo, tickMark }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoFormUi />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItemUi todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoPrivider>
  );
}

export default App;
