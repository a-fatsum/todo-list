import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function CreateList({ onCreate }) {
  const [listName, setListName] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    if (listName) {
      onCreate(listName, dueDate.toDateString());
      setListName("");
    }
  };

  return (
    <div>
      <form className="create-list-form" onSubmit={onSubmit}>
        <div>
          <input
            placeholder="List Name"
            type="text"
            name="list"
            onChange={(e) => setListName(e.currentTarget.value)}
            value={listName}
            className="list-input"
          />
          <button className="create-list-form-button" type="submit">
            {" "}
            <i className="fas fa-plus-square"></i>
          </button>
        </div>
        <div className="due-date-picker-container">
          <DatePicker
            className="due-date-picker"
            value={dueDate}
            onChange={(value, e) => {
              setDueDate(value);
              console.log(dueDate);
            }}
            placeholderText={"Due Date"}
          ></DatePicker>
        </div>
      </form>
    </div>
  );
}
