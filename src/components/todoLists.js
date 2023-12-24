import React from "react";

// Import components
import Lists from "./lists";
//

function TodoLists({ todosList, setTodosList }) {
  //
  //

  // ================================
  return (
    <div className="todo-container">
      <ul className="todo-list y">
        {todosList.map((listOfTodos) => (
          <Lists
            text={listOfTodos.text}
            key={listOfTodos.id}
            todosList={todosList}
            setTodosList={setTodosList}
            listOfTodos={listOfTodos}
          ></Lists>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
