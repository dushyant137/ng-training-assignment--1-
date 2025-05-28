import React, { useState } from 'react';

export default function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleSave = () => {
    if (title.trim()) {
      onUpdate(todo.id, { ...todo, title });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-2 border-b">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-1 flex-grow mr-2"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => onToggle(todo.id)}
            className={`cursor-pointer flex-grow ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {todo.title}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
