import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const Task = ({ task, handleCheck, handleDelete }) => {
  return (
    <li className="task">
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => handleCheck(task._id, !task.checked)}
        checked={task.checked}
      />
      <label
      className="desc"
        style={task.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(task._id)}
      >
        {task.desc}
      </label>
      <FaTrashAlt
      className="delete__icon"
        onClick={() => {
          handleDelete(task._id);
        }}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${task.desc}`}
      />
    </li>
  );
};

export default Task;