import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todoItem, todo, todos, setTodos }) => {
  // Handlers
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todoItem}</li>
      <div className="check-delete">
        <button onClick={completeHandler} className="complete-btn">
          <FontAwesomeIcon icon={faCheck} color="green"></FontAwesomeIcon>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <FontAwesomeIcon icon={faTrash} color="red"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Todo;
