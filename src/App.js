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
        <h1>Our Lists!**21-12**</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodosList={setTodosList}
        todosList={todosList}
      ></Form>

      <TodoLists todosList={todosList}></TodoLists>
    </div>
  );
}
export default App;
