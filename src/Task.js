// src/Task.js
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  console.log('Task component received task:', task);

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.text}</h3>
      <p>{task.date}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default Task;