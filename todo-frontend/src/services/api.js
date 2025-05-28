const BASE_URL = 'http://localhost:8080/api/todos';

export const getTodos = async () => (await fetch(BASE_URL)).json();

export const addTodo = async (todo) =>
  (await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  })).json();

export const deleteTodo = async (id) =>
  fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });

export const toggleTodo = async (id) =>
  (await fetch(`${BASE_URL}/${id}/toggle`, { method: 'PUT' })).json();

export const updateTodo = async (id, updatedTodo) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTodo),
  });
  if (!response.ok) {
    throw new Error('Failed to update todo');
  }
  return response.json();
};
