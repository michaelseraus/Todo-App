import React from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const ToDoList = ({ isShowing, toDoDate, setTodos, todos, setInputValue, inputValue }) => {
  // Handlers
  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const submitTodo = () => {
    if (inputValue === "") return alert("Be sure to add a task");
    setTodos([...todos, { date: toDoDate, text: inputValue, completed: false, id: uuidv4() }]);
    setInputValue("");
  };

  return (
    <div className={`todo-container ${isShowing ? "" : "hidden"}`}>
      <h1>To Do List</h1>

      <input onChange={inputHandler} value={inputValue} className="todo-input" type="text" />
      <button className="add-btn" onClick={submitTodo} type="submit">
        Add To Do
      </button>

      {todos
        .filter((el) => el.date === toDoDate)
        .map((todo) => (
          <Todo
            toDoDate={toDoDate}
            todos={todos}
            setTodos={setTodos}
            todoItem={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
    </div>
  );
};
export default ToDoList;
