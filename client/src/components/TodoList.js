// src/components/TodoList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <AddTodo fetchTodos={fetchTodos} />
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </div>
  );
};

export default TodoList;
