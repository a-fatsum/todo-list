import React, { useState, useEffect } from "react";
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
  //===================================
  // Use 2 hooks.. first one [status, setStatus] is to store all of our todos
  const [status, setStatus] = useState("all");
  // Second hook [filteredTodos, SetFilteredTodos] is to store the filtered items based on their status being "complete" or "uncomplete"
  const [filteredTodos, setFilteredTodos] = useState([]);

  // ====================================================================
  // useEffect
  // useEffect to run the function filterHandler() everytime we modify the status or make a todo entery
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //
  //  =======================================
  // Functions and events

  // filterHandler()  to filter out the "completed" and "uncompleted" items
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // statusHandler() to set the status of items "complete" or "incomplete"
  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };
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
          {/* call statusHandler() function on change */}
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      {/* ============================================================ */}
      {/* ============================================================ */}

      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
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
