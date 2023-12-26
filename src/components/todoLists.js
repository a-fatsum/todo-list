import React, { useState } from "react";

// Import components
import Lists from "./lists";
//

function TodoLists({ todosList, setTodosList }) {
  // useState
  // ==================================
  // Hook for collapsing and expanding the todo-list
  const [selected, setSelected] = useState(null);
  // console.log(selected);
  // ====================================================================
  // Functions and events
  // toggleExpand function to open and close each todo-list
  const toggle = (index) => {
    if (selected === index) {
      console.log(selected);
      console.log(index);
      return setSelected(null);
    } else {
      setSelected(index);
      console.log(selected);
      console.log(index);
    }
  };

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
              <button
                onClick={() => toggle(index)}
                className="open-collaps-button"
              >
                <i
                  className={
                    selected === index ? "fa fa-sort-up" : "fa fa-sort-down"
                  }
                ></i>
                {/* <i className="fa fa-sort-down"></i> */}
              </button>
            </div>
            {/* Rendering todo-lists */}
            <Lists
              selected={selected}
              key={listOfTodos.id}
              todosList={todosList}
              setTodosList={setTodosList}
              listOfTodos={listOfTodos}
              index={index}
              setSelected={setSelected}
            ></Lists>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
