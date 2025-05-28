import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd({ title, completed: false });
      setTitle('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Todo Application</h1>
        <div className="flex gap-2 w-full">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border p-3 rounded flex-grow text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add new todo"
          />
          <button
            onClick={handleAdd}
            disabled={!title.trim()}
            className={`p-3 rounded text-white text-lg transition-colors duration-200 ${
              title.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
