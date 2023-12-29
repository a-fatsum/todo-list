import React, { useState, useEffect } from "react";
//
import TodoLists from "./todoLists";
//
function Form({
  setInputText,
  // setTodosList, todosList,
  inputText,
}) {
  // use state
  const [todosList, setTodosList] = useState([]);

  // ===================
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }
  //
  const submitTodoHandler = (e) => {
    e.preventDefault();
    // Prevent empty inputs
    if (inputText) {
      setTodosList([
        ...todosList,
        { text: inputText, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };
  //
  return (
    <div>
      <form>
        <input
          placeholder="List name"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      <TodoLists todosList={todosList} setTodosList={setTodosList}></TodoLists>
    </div>
  );
}

export default Form;
