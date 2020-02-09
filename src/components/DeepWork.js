import React, { useState } from "react";
import { DatePicker, message, Input } from "antd";
import PieChart from "./nivo/PieChart";
import "antd/dist/antd.css";
import Todos from "./work/todos/Todos";
import TodoList from "./work/todos/TodoList";

function DeepWork() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: "",
    label: "",
    value: "",
  });
  const textOnChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
      value: Number(e.target.value),
    });
  };
  const onSubmit = e => {
    e.preventDefault();
  };
  const onClick = () => {
    setTodos([...todos, todo]);
    setTodo({
      id: "",
      label: "",
      value: "",
    });
  };

  const [date, setDate] = useState({
    start: "",
    end: "",
  });
  function dateOnChange(date, dateString) {
    console.log(dateString);
    message.info(`Selected Date: ${dateString ? dateString : "None"}`);
    setDate({
      start: dateString[0],
      end: dateString[1],
    });
  }
  console.log(todo);
  console.log(date);
  console.log(todos);
  return (
    <div>
      <Todos />
    </div>
  );
}

export default DeepWork;
