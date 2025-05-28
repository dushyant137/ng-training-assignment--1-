package com.todo.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todo.entity.Todo;
import com.todo.todo.service.TodoService;

//controller/TodoController.java
@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class TodoController {
	
 @Autowired 
 private TodoService service;

 @GetMapping public List<Todo> all() {
     return service.getAll();
 }

 @PostMapping public Todo add(@RequestBody Todo todo) {
     return service.add(todo);
 }

 @DeleteMapping("/{id}") public void delete(@PathVariable Long id) {
     service.delete(id);
 }
 
 @PutMapping("/{id}")
 public Todo update(@PathVariable Long id, @RequestBody Todo updatedTodo) {
     return service.update(id, updatedTodo);
 }

 @PutMapping("/{id}/toggle") public Todo toggle(@PathVariable Long id) {
     return service.toggleComplete(id);
 }
}
