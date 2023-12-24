import React from "react";

//
//
//
//
//
//
//
//

function Form({ setInputText, setTodosList, todosList, inputText }) {
  //
  //

  // ===================
  function inputTextHandler(e) {
    // console.log(inputText);
    setInputText(e.target.value);
  }
  //
  const submitTodoHandler = (e) => {
    e.preventDefault();
    // console.log(inputText);
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
  //
  //
  return (
    <div>
      <form>
        <input
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
    </div>
  );
}

export default Form;
