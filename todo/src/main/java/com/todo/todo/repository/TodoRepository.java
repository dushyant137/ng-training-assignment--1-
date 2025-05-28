package com.todo.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.todo.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
