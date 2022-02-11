import React from "react";
import { useState } from "react";
import CreateUser from "./create-user.component";
import SearchUser from "./search-user.component";
import axios from "axios";
const User = () => {
  const [searchUser, setSearchUser] = useState("");
  const [newUser, setNewUser] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        const result = response.data.filter(
          (user) => user.username === searchUser
        );
        if (result) {
          window.location.href = `http://localhost:3000/${result[0]._id}`;
        }
      })
      .catch((error) => {
      });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const user = {
      username: newUser,
    };
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => {
        setStatus("");
      })
      .catch((err) => setStatus("Username already exists"));

    setNewUser("");
  };

  return (
    <>
      <div className="inputs">
        <SearchUser
          searchUser={searchUser}
          setSearchUser={setSearchUser}
          handleSearch={handleSearch}
        />
        <CreateUser
          newUser={newUser}
          setNewUser={setNewUser}
          handleCreate={handleCreate}
        />
      </div>
      <p>{status}</p>
    </>
  );
};

export default User;