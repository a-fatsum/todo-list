import React, { useState } from "react";
//
// Import components
//
import Todo from "./todo";

// ===========================================================================
function Lists({ text }) {
  // useStates
  // input text for the list_todos
  const [todosInputText, setTodosInputText] = useState("");
  // todos items
  const [todos, setTodos] = useState([]);
  //
  // ====================================================================
  //
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setTodosInputText(e.target.value);
  };
  //
  //
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: todosInputText, completed: false, id: Math.random() * 1000 },
    ]);
    setTodosInputText("");
  };
  //
  //
  return (
    <div className="todo-container">
      <header>
        <h5>{text}</h5>
      </header>
      <form>
        <input
          value={todosInputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      {/* ============================================================ */}

      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
            >
              {" "}
            </Todo>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lists;
