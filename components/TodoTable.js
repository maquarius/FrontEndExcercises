import React from "react";

const TodoTable = props => {
  return (
    <div>
      <table>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <button id={index} onClick={props.deleteItem}>
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
