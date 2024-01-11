import React from "react";

//
//
//
//
//
//

function Todo({ text, todo, setFilteredTodos, filteredTodos }) {
  // Functions and events
  //   deleteHandler() filters through the [todos] array and only keeps the items with the id that dooesn't match the selected todo item
  const deleteHandler = () => {
    setFilteredTodos(filteredTodos.filter((el) => el.id !== todo.id));
    //
  };

  // =======================
  // completeHandler() maps through the [todos] array and flips the "completed" status over
  const completeHandler = () => {
    setFilteredTodos(
      filteredTodos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  //
  //
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {" "}
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
