import React, { useState } from "react";

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
        <table>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <button id={index} onClick={deleteItem}>
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default Todolist;
