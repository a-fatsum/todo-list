import React from "react";

// Import components
import Lists from "./lists";
//

function TodoLists({ todosList, setStatus }) {
  //
  //

  // ================================
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todosList.map((todo) => (
          <Lists setStatus={setStatus} text={todo.text} key={todo.id}></Lists>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
