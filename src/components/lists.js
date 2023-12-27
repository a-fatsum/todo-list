import React, { useState, useEffect, createRef } from "react";
//
// Import components
//
import Todo from "./todo";
//

// ===========================================================================
function Lists({
  // text,
  listOfTodos,
  setTodosList,
  todosList,
  index,
  // selected,
}) {
  // useState
  // input text for the list_todos
  const [todosInputText, setTodosInputText] = useState("");
  // todos items
  const [todos, setTodos] = useState([]);
  //===================================
  // Use 2 hooks.. first one [status, setStatus] is to store all of our todos
  const [status, setStatus] = useState("all");
  // Second hook [filteredTodos, SetFilteredTodos] is to store the filtered items based on their status being "complete" or "uncomplete"
  const [filteredTodos, setFilteredTodos] = useState([]);
  // ==================================
  // ========================================================
  //  Hooks to use for the toggle()
  const [selected, setSelected] = useState(null);
  // console.log(selected);
  // ====================================================================
  // ====================================================================
  // useEffect
  // useEffect to run the function filterHandler() everytime we modify the status or make a todo entery
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //  =======================================
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
      console.log(selected);
      console.log(index);
      return setSelected(null);
    } else {
      setSelected(index);
      console.log(selected);
      console.log(index);
    }
  };

  //
  // Creating a ref objext to reference the unput value
  const inputRef = createRef();
  // ======================================================
  // const ref = useRef();
  // // // toggleExpand function to open and close each todo-list
  // const ul = ref.current; // corresponding DOM node
  // const toggle = () => {
  //   if (selected === index) {
  //     ul.className = "todo-list-items";

  //     //
  //     console.log(selected);
  //     console.log(index);
  //     console.log(ul.className);
  //     // return ul.className;
  //   } else if (selected !== index) {
  //     ul.className = "hide";

  //     // set selected to equal index somehow .............
  //     console.log(selected);
  //     console.log(index);
  //     console.log(ul.className);
  //     // return ul.className;
  //   }
  //   console.log(selected);
  //   console.log(index);
  //   console.log(ul.className);
  //   // return ul.className;
  //   // className={selected === index ? "todo-list-items" : "hide"}
  // };

  // =======================================================
  return (
    <div className="todo-container x">
      <form>
        <input
          value={todosInputText}
          // onChange={inputTextHandler}
          onInput={(e) => {
            inputTextHandler(e);
            toggle(index);
            console.log(e.target.value == false);
            console.log(inputRef);
          }}
          ref={inputRef}
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
        {/* ================================================================================== */}

        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(index);
          }}
          className="open-collaps-button"
        >
          <i
            className={selected === index ? "fa fa-sort-up" : "fa fa-sort-down"}
          ></i>
          {/* <i className="fa fa-sort-down"></i> */}
        </button>

        {/* ================================================================================== */}
        <div className="select">
          {/* call statusHandler() function on change */}
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <button onClick={deleteHandler}>
          {" "}
          <i className="fas fa-trash"></i>
        </button>
      </form>
      {/* ============================================================ */}
      <div>
        {/* toggle class "hide" to hide and expand the todo-list-items */}
        <ul
          // ref={ref}
          className={selected === index ? "todo-list-items" : "hide"}
        >
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
