import React from "react";
import Task from "./task.component";
import "../styles/tasks.css";

export const Tasks = ({ tasks, search, handleCheck, handleDelete }) => {
  return (
    <div className="tasks">
      {tasks
        .filter((task) =>
          ((task.desc).toLowerCase()).includes(search.toLowerCase())
        )
        .map((task) => (
          <Task
            key={task._id}
            task={task}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default Tasks;