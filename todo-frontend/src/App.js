import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { getTodos, addTodo, deleteTodo, toggleTodo, updateTodo } from './services/api';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async (newTodo) => {
    try {
      const added = await addTodo(newTodo);
      setTodos((prev) => [...prev, added]);
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  const handleToggle = async (id) => {
    try {
      const updated = await toggleTodo(id);
      setTodos((prev) => prev.map((todo) => (todo.id === id ? updated : todo)));
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  const handleUpdate = async (id, updatedTodo) => {
    try {
      const updated = await updateTodo(id, updatedTodo);
      setTodos((prev) => prev.map((todo) => (todo.id === id ? updated : todo)));
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-4 flex flex-col items-center">
        <AddTodo onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}
