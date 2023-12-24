import React, { useState } from "react";
import "./App.css";

// Import components
import Form from "./components/form";
import TodoLists from "./components/todoLists";
//

function App() {
  //

  // ======================================
  // input text for the lists titles
  const [inputText, setInputText] = useState("");
  //
  const [todosList, setTodosList] = useState([]);
  //
  // // ===============================================

  //
  return (
    <div className="App">
      <header>
        <h1>What's on the list?</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodosList={setTodosList}
        todosList={todosList}
      ></Form>

      <TodoLists todosList={todosList} setTodosList={setTodosList}></TodoLists>
    </div>
  );
}
export default App;
