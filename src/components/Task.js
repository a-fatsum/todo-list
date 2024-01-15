export function Task({ task, onDelete, onComplete }) {
  const status = task.status === "completed" ? "incomplete" : "completed";

  return (
    <div className="task">
      <div className={task.status}>{task.text}</div>

      <div>
        <button className="complete-btn" onClick={() => onComplete(status)}>
          {" "}
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
