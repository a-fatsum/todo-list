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
      <ul className=" y">
        {/* Pass in the index to use for opena and collapse the todo items  */}
        {todosList.map((listOfTodos, index) => (
          <Lists
            text={listOfTodos.text}
            key={listOfTodos.id}
            todosList={todosList}
            setTodosList={setTodosList}
            listOfTodos={listOfTodos}
            index={index}
          ></Lists>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
