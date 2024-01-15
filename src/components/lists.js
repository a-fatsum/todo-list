import { useState } from "react";
import { Task } from "./Task";

export function Lists({
  list,
  tasks,
  onCreateTask,
  onTaskAction,
  onListAction,
}) {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("all");

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateTask(task, list.id);
    setTask("");
  };

  const filterTasks = () => {
    if (status === "all") {
      return tasks;
    }

    return tasks.filter((task) => task.status === status);
  };

  const filteredTasks = filterTasks();

  console.log(list.name, tasks);

  return (
    <div className="todos-list-container">
      <header className="list-header">
        <div className="top">
          <b>{list.name}</b>

          <span>{list.date}</span>
        </div>
        <div className="list-actions">
          <form className="list-form" onSubmit={onSubmit}>
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => setTask(e.currentTarget.value)}
            />
            <button type="submit">
              <span>Add Task</span>
            </button>
          </form>
          <div className="select">
            <select
              className="select-drop-down"
              onChange={(e) => setStatus(e.currentTarget.value)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
          <button
            type="button"
            className=" todo-list-trash-btn "
            onClick={() => onListAction("delete", list.id)}
          >
            {" "}
            <i className="fas fa-trash"></i>
          </button>

          {/* <div></div> */}
        </div>
      </header>

      <div className="tasks">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={(status) => onTaskAction(status, task.id)}
            onDelete={() => onTaskAction("delete", task.id)}
          />
        ))}
      </div>
    </div>
  );
}
