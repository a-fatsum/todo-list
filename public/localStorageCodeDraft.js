// =====================================================================
// useEffect
useEffect(() => {
  saveLocalTodosList();
}, [todosList]);
// ==============================
// save local todos
const saveLocalTodosList = () => {
  if (localStorage.getItem("todosListLocalStorage") === null) {
    localStorage.setItem("todosListLocalStorage", JSON.stringify([]));
  } else {
    localStorage.setItem("todosListLocalStorage", JSON.stringify(todosList));
  }
};
// getLocalTodosList
const getLocalTodosList = () => {
  if (localStorage.getItem("todosListLocalStorage") === null) {
    localStorage.setItem("todosListLocalStorage", JSON.stringify([]));
  } else {
    let todosListFromLocal = JSON.parse(
      localStorage.getItem("todosListLocalStorage")
    );
    setTodosList(todosListFromLocal);
  }
};
// //
// // run getLocalTodosList once when the app starts
useEffect(() => {
  getLocalTodosList();
}, []);
// =====================================================================
