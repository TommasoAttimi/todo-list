// src/components/AddTodo.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./AddTodo.module.css";

const AddTodo = ({ fetchTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/todos", { title });
      setTitle("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form onSubmit={addTodo} className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
