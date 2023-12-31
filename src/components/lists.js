import React, { useState, useEffect } from "react";
// Import components
import Todo from "./todo";
//
// ===========================================================================
function Lists({
  // text,
  listOfTodos,
  setTodosList,
  todosList,
  index,
  todos,
  setTodos,
  // uncomment selected, setSelected props if you want to activate accordion style list expand
  // selected,
  // setSelected,
}) {
  // useState
  // input text for the list_todos
  const [todosInputText, setTodosInputText] = useState("");
  // todos items
  // const [todos, setTodos] = useState(() => {
  //   const localValue = localStorage.getItem("TODO-ITEMS");
  //   if (localValue == null) return [];
  //   return JSON.parse(localValue);
  // });
  //===================================
  // Use 2 hooks.. first one [status, setStatus] is to store all of our todos
  const [status, setStatus] = useState("all");
  // Second hook [filteredTodos, SetFilteredTodos] is to store the filtered items based on their status being "complete" or "uncomplete"
  const [filteredTodos, setFilteredTodos] = useState([]);
  // ====================================================================
  // Set local storage items
  // useEffect(() => {
  //   localStorage.setItem("TODO-ITEMS", JSON.stringify(todos));
  // }, [todos]);

  // ====================================================================
  //  Hooks to use for the toggle()
  // comment out [selected, setSelected] if you want to acctivate accordion
  const [selected, setSelected] = useState(null);
  // ====================================================================
  // useEffect
  // useEffect to run the function filterHandler() everytime we modify the status or make a todo entery
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //  ==================================================================
  // Functions and events
  // filterHandler()  to filter out the "completed" and "uncompleted" items
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // statusHandler() to set the status of items "complete" or "incomplete"
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  //
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setTodosInputText(e.target.value);
  };
  //
  const submitTodoHandler = (e) => {
    e.preventDefault();
    //   prevent empty inputs from the user
    if (todosInputText) {
      setTodos([
        ...todos,
        { text: todosInputText, completed: false, id: Math.random() * 1000 },
      ]);
    }
    setTodosInputText("");
  };
  //
  //   deleteHandler() filters through the [todosList] array and only keeps the items with the id that dooesn't match the selected todo item
  const deleteHandler = (e) => {
    e.preventDefault();
    //    confirming with the user before deleting a listOfTodos
    if (window.confirm("Are you sure you want to delete this list?")) {
      setTodosList(todosList.filter((el) => el.id !== listOfTodos.id));
    }
  };
  // Functions and events
  // toggleExpand function to open and close each todo-list
  //
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    } else {
      setSelected(index);
    }
  };

  // Function to display input list when user starts typing
  const displayListOnInput = function () {
    if (todosInputText.length >= 0) {
      return setSelected(index);
    } else {
      setSelected(null);
    }
  };
  //
  // ==================================================================
  return (
    <div className="todos-list-container">
      <form className="todos-list-form">
        <div className="list-heading">
          <h5>{listOfTodos.text}</h5>
          <div>xx</div>
        </div>
        <div className="todos-list-form-inputs">
          <input
            value={todosInputText}
            // onChange={inputTextHandler}
            onInput={(e) => {
              inputTextHandler(e);
              displayListOnInput();
            }}
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
          <i
            onClick={(e) => {
              e.preventDefault();
              toggle(index);
            }}
            className={selected === index ? "fa fa-sort-up" : "fa fa-sort-down"}
          ></i>
          {/* ========================================================== */}
          <div className="select">
            {/* call statusHandler() function on change */}
            <select
              onChange={statusHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
          <button className="todo-list-trash-btn" onClick={deleteHandler}>
            {" "}
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </form>
      {/* ============================================================ */}
      <div>
        {/* toggle class "hide" to hide and expand the todo-list-items */}
        <ul className={selected === index ? "todo-list-items" : "hide"}>
          {filteredTodos.map((todo) => (
            <Todo
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
            >
              {"  "}
            </Todo>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lists;
