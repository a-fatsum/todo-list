export function getItems() {
  const items = {
    lists: [],
    tasks: [],
  };

  try {
    const todoItems = localStorage.getItem("todo");
    if (todoItems) {
      return JSON.parse(todoItems);
    } else {
      return items;
    }
  } catch (e) {
    return items;
  }
}

export function setItems(lists, tasks) {
  try {
    localStorage.setItem("todo", JSON.stringify({ lists, tasks }));
  } catch (e) {}
}
