package com.todo.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.todo.entity.Todo;
import com.todo.todo.repository.TodoRepository;

// service/TodoService.java
@Service
public class TodoService {
    @Autowired private TodoRepository repo;

    public List<Todo> getAll() {
        return repo.findAll();
    }

    public Todo add(Todo todo) {
        return repo.save(todo);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Todo toggleComplete(Long id) {
        Todo todo = repo.findById(id).orElseThrow();
        todo.setCompleted(!todo.isCompleted());
        return repo.save(todo);
    }
    
    public Todo update(Long id, Todo updatedTodo) {
        Todo existingTodo = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));

        existingTodo.setTitle(updatedTodo.getTitle());
        existingTodo.setCompleted(updatedTodo.isCompleted());

        return repo.save(existingTodo);
    }
}

