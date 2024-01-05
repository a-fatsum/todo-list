import React, { useState, useEffect } from "react";
//
// import TodoLists from "./todoLists";
//
import Lists from "./lists";
//
function Form({
  setInputText,
  // setTodosList, todosList,
  inputText,
}) {
  // use state

  // Localstorage
  // const [todosList, setTodosList] = useState(() => {
  //   const localValue = localStorage.getItem("ITEMS");
  //   if (localValue == null) return [];
  //   return JSON.parse(localValue);
  // });
  // ===================
  // const [todos, setTodos] = useState(
  //     JSON.parse(localStorage.getItem("TODOS-ITEMS")) || []
  // );

  // ====================
  const [todosList, setTodosList] = useState(
    JSON.parse(localStorage.getItem("ITEMS")) || []
  );

  // Set local storage items
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todosList));
  }, [todosList]);
  // ===================
  // const [todos, setTodos] = useState(() => {
  //   const localValue = localStorage.getItem("TODO-ITEMS");
  //   if (localValue == null) return [];
  //   return JSON.parse(localValue);
  // });

  // const handleTodosChange = (updatedItems) => {
  //   localStorage.setItem("TODOS-ITEMS", JSON.stringify(updatedItems));
  //   setTodos(updatedItems);
  // };

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
          placeholder="List Name"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="add-todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
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
              // todos={todos}
              // setTodos={setTodos}
              // status={status}
              // setStatus={setStatus}
              // filteredTodos={filteredTodos}
              // setFilteredTodos={setFilteredTodos}
              // setSelected={setSelected}
            ></Lists>
          ))}
        </ul>
      </div>
      {/* <Lists
      // todos={todos}
      // setTodos={setTodos}
      // todosList={todosList}
      // setTodosList={setTodosList}
      ></Lists> */}
    </div>
  );
}

export default Form;
