import React, { useState, useEffect } from "react";

// Import components
import Lists from "./lists";
//

function TodoLists({ todosList, setTodosList }) {
  // useState
  // ==================================
  // Hook for collapsing and expanding the todo-list
  // uncomment [selected, setSelected] hooks if you want to activate accordion style list expand
  // const [selected, setSelected] = useState(null);
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
            // setSelected={setSelected}
          ></Lists>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
