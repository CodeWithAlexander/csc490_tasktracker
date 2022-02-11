import React from 'react';
import '../styles/add.css';

export const Add = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text"
        placeholder='Add Task'
        className='add__input'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} />
    </form>
  )
}
export default Add;