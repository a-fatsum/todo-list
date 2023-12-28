import React, { useState } from "react";

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
  // ================================
  return (
    <div className="todo-container">
      <ul className=" y">
        {/* Pass in the index to use for opena and collapse the todo items  */}
        {todosList.map((listOfTodos, index) => (
          // // // key property below is temporary ->->->-> ?????????????????? change later to a proper key property
          <div className="z" key={listOfTodos.id}>
            <div className="list-heading">
              <h5>{listOfTodos.text}</h5>
            </div>
            {/* Rendering todo-lists */}
            <Lists
              // selected={selected}
              key={listOfTodos.id}
              todosList={todosList}
              setTodosList={setTodosList}
              listOfTodos={listOfTodos}
              index={index}
              // setSelected={setSelected}
            ></Lists>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
