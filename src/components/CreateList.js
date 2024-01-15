import { useState } from "react";

export function CreateList({ onCreate }) {
  const [listName, setListName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (listName) {
      onCreate(listName);
      setListName("");
    }
  };

  return (
    <div>
      <form className="create-list-form" onSubmit={onSubmit}>
        <input
          placeholder="List Name"
          type="text"
          name="list"
          onChange={(e) => setListName(e.currentTarget.value)}
          value={listName}
          className="list-input"
        />
        <button type="submit">
          {" "}
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}
