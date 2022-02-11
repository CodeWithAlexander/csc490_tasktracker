import React from "react";
import "../styles/content.css";
import { Search } from "./search.component";
import Add from "./add.component";
import Tasks from "./tasks.component";
import { useState } from "react";
import axios from "axios";

export const Content = (props) => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState("");
  const _id = props.match.params._id;

  axios
    .get(`http://localhost:5000/tasks/${_id}`)
    .then((response) => {
      setTasks(response.data);
    })
    .catch((error) => {
    });

  const handleCheck = (_id, newStatus) => {
    const task = {
      checked: newStatus,
    };

    axios
      .post(`http://localhost:5000/tasks/updateCheckStatus/${_id}`, task)
  };

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:5000/tasks/delete/${_id}`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      userId: _id,
      checked: false,
      desc: newTask,
    };

    axios
      .post("http://localhost:5000/tasks/add", task)

    setNewTask("");
  };

  return (
    <>
      <h1 className="your__tasks">Your Tasks</h1>
      <div className="inputs">
        <Search search={search} setSearch={setSearch} />
        <Add
          newTask={newTask}
          setNewTask={setNewTask}
          handleSubmit={handleSubmit}
        />
      </div>
      <Tasks
        tasks={tasks}
        search={search}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Content;
