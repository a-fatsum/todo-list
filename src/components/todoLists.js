import React, { useState, useEffect } from "react";

// Import components
import Lists from "./lists";
//

function TodoLists({ todosList, setTodosList, todos, setTodos }) {
  // useState
  // ==================================
  // Hook for collapsing and expanding the todo-list
  // uncomment [selected, setSelected] hooks if you want to activate accordion style list expand
  // const [selected, setSelected] = useState(null);
  // =====================================================================

  // const [todos, setTodos] = useState(() => {
  //   const localValue = localStorage.getItem("TODO-ITEMS");
  //   if (localValue == null) return [];
  //   return JSON.parse(localValue);
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
            // setSelected={setSelected}
          ></Lists>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
