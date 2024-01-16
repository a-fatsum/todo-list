import React, { useState, useEffect } from "react";
import "./App.css";

// Import components
import { Form } from "./components/Form"; // import TodoLists from "./components/todoLists";
//

function App() {
  return (
    <div className="App">
      <header>
        <h2>What's on the list?</h2>
      </header>
      <Form></Form>
    </div>
  );
}
export default App;
