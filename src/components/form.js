import { useEffect, useState } from "react";

import { CreateList } from "./CreateList";
import { Lists } from "./Lists";
import { getItems, setItems } from "../utils";

export function Form({}) {
  // use state
  const [tasks, setTasks] = useState(() => getItems().tasks);
  const [lists, setLists] = useState(() => getItems().lists);

  const createList = (name, dueDate) => {
    const id = new Date().valueOf();
    const date = new Date().toLocaleDateString();
    setLists([
      ...lists,
      {
        id,
        date,
        name,
        dueDate,
      },
    ]);
  };
  const createTask = (text, listId) => {
    const id = new Date().valueOf();
    const date = new Date().toLocaleDateString();
    setTasks([
      ...tasks,
      {
        id,
        date,
        listId,
        text,
        status: "incomplete",
      },
    ]);
  };

  const listAction = (action, listId) => {
    const newLists = lists.filter(({ id }) => listId !== id);
    const newTasks = tasks.filter((task) => task.listId !== listId);
    setLists(newLists);
    setTasks(newTasks);
  };

  const taskAction = (action, taskId) => {
    if (action === "delete") {
      deleteTask(taskId);
    } else {
      updateTask(taskId, action);
    }
  };

  const updateTask = (id, status) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            status,
          };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const getTasks = (listId) => tasks.filter((task) => listId === task.listId);

  useEffect(() => {
    const todoList = getItems();
    setTasks(todoList.tasks);
    setLists(todoList.lists);
  }, []);

  useEffect(() => {
    setItems(lists, tasks);
  }, [tasks, lists]);

  console.log({ tasks, lists });

  return (
    <div className="todo-list">
      <CreateList onCreate={createList} />
      {lists.map((list) => (
        <Lists
          onListAction={listAction}
          key={list.id}
          list={list}
          tasks={getTasks(list.id)}
          onCreateTask={createTask}
          onTaskAction={taskAction}
        />
      ))}
    </div>
  );
}
