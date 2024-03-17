import { useState } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    setTasks([
      ...tasks,
      { id: Date.now(), name, completed: false }]);
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
      <h1>Task List</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  );
}

export default App;
