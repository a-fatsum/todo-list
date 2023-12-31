import React, { useState, useEffect } from "react";

// Import components
import Lists from "./lists";
//

function TodoLists({
  todosList,
  setTodosList,
  // todos, setTodos
}) {
  // useState
  // ==================================
  // Hook for collapsing and expanding the todo-list
  // uncomment [selected, setSelected] hooks if you want to activate accordion style list expand
  // const [selected, setSelected] = useState(null);
  // =====================================================================

  // ====================================================================
  // ====================================================================
  // ====================================================================
  // ====================================================================
  //
  const [todos, setTodos] = useState(() => {
    const todosItemsValue = localStorage.getItem("TODO-ITEMS");
    if (todosItemsValue == null) return [];
    return JSON.parse(todosItemsValue);
  });

  // // filteredTodos items
  const [filteredTodos, setFilteredTodos] = useState([]);
  // // Set local storage items
  useEffect(() => {
    localStorage.setItem("TODO-ITEMS", JSON.stringify(filteredTodos));
    console.log(localStorage.getItem("TODO-ITEMS"));
  }, [filteredTodos]);
  // ====================================================================
  // ====================================================================
  // ====================================================================
  const [status, setStatus] = useState("all");

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

  //
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //
  // statusHandler() to set the status of items "complete" or "incomplete"
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  // ====================================================================
  // ====================================================================

  // const [todos, setTodos] = useState(() => {
  //   const todosItemsValue = localStorage.getItem("TODO-ITEMS");
  //   if (todosItemsValue == null) return [];
  //   return JSON.parse(todosItemsValue);
  // });
  // // Set local storage items
  // useEffect(() => {
  //   localStorage.setItem("TODO-ITEMS", JSON.stringify(todos));
  // }, [todos]);

  // =====================================================================
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* Pass in the index to use for opena and collapse the todo items  */}
        {todosList.map((listOfTodos, index) => (
          <Lists
            // selected={selected}
            key={listOfTodos.id}
            todosList={todosList}
            setTodosList={setTodosList}
            listOfTodos={listOfTodos}
            index={index}
            todos={todos}
            setTodos={setTodos}
            status={status}
            setStatus={setStatus}
            filteredTodos={filteredTodos}
            setFilteredTodos={setFilteredTodos}
            // setSelected={setSelected}
          ></Lists>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
