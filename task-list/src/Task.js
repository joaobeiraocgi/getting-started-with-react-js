import React from 'react';
import './Task.css';

const Task = ({ task, onToggle }) => (
    <li 
        className='task'
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
        />
        {task.name}
    </li>
);

export default Task;
