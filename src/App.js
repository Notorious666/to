// src/App.js
import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';

const App = () => {

   // Function to format a date consistently as MM/DD/YYYY
   const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learn React',
      date: formatDate(new Date('2023-09-05')), // Format the date consistently
      completed: false,
    },
    {
      id: 2,
      text: 'Build a To-Do List',
      date: formatDate(new Date('2023-09-06')), // Format the date consistently
      completed: false,
    },
    // Add more tasks as needed
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const currentDate = new Date();
      const newTaskObj = {
        id: Math.random(),
        text: newTask,
        date: formatDate(currentDate), // Format the date consistently
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask(''); //Clear the input field
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };  

 const toggleTask = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <div>
        <input //Creates new tasks
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
};

export default App;
