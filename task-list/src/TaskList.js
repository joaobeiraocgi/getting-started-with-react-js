import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggle }) => (
  <ul>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onToggle={onToggle} />
    ))}
  </ul>
);

export default TaskList;
