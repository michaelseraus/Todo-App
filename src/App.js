import React, { useState } from "react";
import Calendar from "react-calendar";
// Components
import ToDoList from "./Components/ToDoList";
// data
import data from "./data.json";
import Datum from "./Components/Datum";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // state
  const [toDoDate, setToDoDate] = useState(new Date().toLocaleDateString());
  const [isShowing, setIsShowing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  // Handlers
  const storedDatesHandler = ({ date }) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].date === formatDate(date)) return "vacation";
    }
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].date === formatDate(date)) return "orange";
    }
  };

  const vacationTitleHandler = ({ date }) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].date === formatDate(date)) return data[i].name;
    }
  };

  const onChangeHandler = (date) => {
    setToDoDate(formatDate(date));
  };

  const formatDate = (date) => {
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  };

  const clickHandler = (date) => {
    if (formatDate(date) === toDoDate) setIsShowing(!isShowing);
    console.log(toDoDate);
  };

  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <Calendar
              setToDoDate={setToDoDate}
              onChange={onChangeHandler}
              tileClassName={storedDatesHandler}
              tileContent={vacationTitleHandler}
              onClickDay={clickHandler}
            />
          </Col>
          <Col md="auto">
            <Datum toDoDate={toDoDate} />
          </Col>
          <Col md={4}>
            <ToDoList
              inputValue={inputValue}
              setInputValue={setInputValue}
              todos={todos}
              setTodos={setTodos}
              toDoDate={toDoDate}
              setToDoDate={setToDoDate}
              isShowing={isShowing}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
