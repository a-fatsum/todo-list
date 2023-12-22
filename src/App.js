import React, { useState } from "react";
import "./App.css";

// Import components
import Form from "./components/form";
import TodoList from "./components/todoLists";
//

function App() {
  // input text for the lists titles
  const [inputText, setInputText] = useState("");
  //
  const [todosList, setTodosList] = useState([]);
  //
  // ===============================================
  // input text for the list_todos
  const [todosInputText, setTodosInputText] = useState("");
  // todos items
  const [todos, setTodos] = useState([]);
  //
  // ===============================================
  return (
    <div className="App">
      <header>
        <h1>Our Lists!**21-12****</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodosList={setTodosList}
        todosList={todosList}
      ></Form>

      <TodoList
        todosList={todosList}
        inputText={inputText}
        todosInputText={todosInputText}
        setTodosInputText={setTodosInputText}
        todos={todos}
        setTodos={setTodos}
      ></TodoList>
    </div>
  );
}
export default App;
