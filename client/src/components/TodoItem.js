// src/components/TodoItem.js
import React from "react";
import axios from "axios";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, fetchTodos }) => {
  const toggleComplete = async () => {
    try {
      await axios.put(`http://localhost:3000/api/todos/${todo._id}`, {
        completed: !todo.completed,
      });
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${todo._id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className={styles.item}>
      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
        onClick={toggleComplete}
      >
        {todo.title}
      </span>
      <button onClick={deleteTodo} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
