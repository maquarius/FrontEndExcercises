import React, { useState } from "react";
import TodoTable from "./components/ToDoTable3thParty";
import "./components/ToDoTable3thParty";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";

const Todolist = () => {
  const [todo, setTodo] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = event => {
    event.preventDefault();
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };

  const deleteItem = event => {
    event.preventDefault();
    setTodos(
      todos.filter((todo, index) => parseInt(event.target.id) !== index)
    );
  };

  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <form onSubmit={addTodo}>
        Description
        <input
          name="description"
          type="text"
          value={todo.description}
          onChange={inputChanged}
        />
        Date
        <input
          name="date"
          type="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <input type="submit" />
        <div className="App">
          <TodoTable todos={todos} />
        </div>
      </form>
    </div>
  );
};
export default Todolist;
