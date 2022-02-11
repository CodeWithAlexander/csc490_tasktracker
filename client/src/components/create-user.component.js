import React from "react";


const CreateUser = ({ newUser, setNewUser, handleCreate,setStatus }) => {
  return (
    <>
      <form onSubmit={(e) => handleCreate(e)}>
        <input
          type="text"
          placeholder="Create User"
          className="add__input"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
      </form>
    </>
  );
};

export default CreateUser;