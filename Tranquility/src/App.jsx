import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  const checkTodo = (e, index) => {
    let todos = document.querySelectorAll(".todo-list");
    todos.forEach((item, n) => {
      if (index == n) {
        item.classList.toggle("checked");
      }
    });
  };

  return (
    <>
      <h1>Tranquility Todo App</h1>
      <input
        type="text"
        value={todo}
        placeholder="Create Todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>

      {todos?.length > 0 ? (
        <ol>
          {todos.map((todo, index) => (
            <div className="todo">
              <li className="todo-list " key={index}>
                {todo}
              </li>

              <button onClick={(e) => checkTodo(e, index)}>☑️</button>
              <button
                className="delete-btn"
                onClick={() => {
                  deleteTodo(todo);
                }}
              >
                X
              </button>
            </div>
          ))}
        </ol>
      ) : (
        <p>List is empty</p>
      )}
    </>
  );
}

export default App;
