import React from "react";

// Import components
import Lists from "./lists";
//

function TodoList({
  todosList,
  todosInputText,
  setTodosInputText,
  todos,
  setTodos,
}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todosList.map((todo) => (
          <Lists
            text={todo.text}
            key={todo.id}
            todosInputText={todosInputText}
            setTodosInputText={setTodosInputText}
            todos={todos}
            setTodos={setTodos}
          ></Lists>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
