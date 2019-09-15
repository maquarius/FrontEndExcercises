import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ description: "", date: "" });

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "" });
  };
  const inputChanged = event => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
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
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
