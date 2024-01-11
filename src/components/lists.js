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
  // status,
  // setStatus,
  // todos,
  // setTodos,
  // filteredTodos,
  // setFilteredTodos,
  // uncomment selected, setSelected props if you want to activate accordion style list expand
  // selected,
  // setSelected,
}) {
  // useState
  // input text for the list_todos
  const [todosInputText, setTodosInputText] = useState("");

  //===================================
  // Use 2 hooks.. first one [status, setStatus] is to store all of our todos
  const [status, setStatus] = useState("all");
  // Second hook [filteredTodos, SetFilteredTodos] is to store the filtered items based on their status being "complete" or "uncomplete"
  // const [filteredTodos, setFilteredTodos] = useState([]);

  // ====================================================================
  //  Hooks to use for the toggle()
  // comment out [selected, setSelected] if you want to acctivate accordion
  const [selected, setSelected] = useState(null);
  // ====================================================================
  // todos items
  const [todos, setTodos] = useState([]);

  // filteredTodos
  const [filteredTodos, setFilteredTodos] = useState(
    JSON.parse(localStorage.getItem("TODOS-ITEMS")) || []
  );
  // ====================================================================
  // // filteredTodos items
  // const [filteredTodos, setFilteredTodos] = useState(() => {
  //   const itemsValue = localStorage.getItem("TODOS-ITEMS");
  //   if (itemsValue == null) return [];
  //   return JSON.parse(itemsValue);
  // });
  // const [filteredTodos, setFilteredTodos] = useState(
  //   JSON.parse(localStorage.getItem("TODOS-ITEMS")) || []
  // );

  //  ==================================================================
  // Functions and events
  // // filterHandler()  to filter out the "completed" and "uncompleted" items
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
    // setFilteredTodos(JSON.parse(localStorage.getItem("TODOS-ITEMS")));
    // console.log(filteredTodos);
    // localStorage.setItem("TODOS-ITEMS", JSON.stringify(filteredTodos));
  };
  //
  // useEffect
  // useEffect to run the function filterHandler() everytime we modify the status or make a todo entery
  useEffect(() => {
    filterHandler();
    localStorage.setItem("TODOS-ITEMS", JSON.stringify(filteredTodos));
    // setFilteredTodos(JSON.parse(localStorage.getItem("TODOS-ITEMS")));
  }, [todos, status]);
  // JSON.parse(localStorage.getItem("TODOS-ITEMS"));
  // JSON.parse(localStorage.getItem("TODOS-ITEMS"));

  // // statusHandler() to set the status of items "complete" or "incomplete"
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
    setTodos([
      ...todos,
      { text: todosInputText, completed: false, id: Math.random() * 1000 },
    ]);
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

  const handleTodosChange = (updatedItems) => {
    localStorage.setItem("TODOS-ITEMS", JSON.stringify(updatedItems));
    // setFilteredTodos(JSON.parse(localStorage.getItem("TODOS-ITEMS")));

    setFilteredTodos(updatedItems);
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
            onChange={(e) => {
              inputTextHandler(e);
              displayListOnInput();
              // handleTodosChange(filteredTodos);
              // filterHandler();
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
              filteredTodos={filteredTodos}
              setFilteredTodos={setFilteredTodos}
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
