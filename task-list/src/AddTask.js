import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
          onAdd(name);
          setName('');
        }
      };
      
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      );
};

export default AddTask;
