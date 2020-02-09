import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem({ todo }) {
  const [data, setData] = useState(todo);
  const onRemove = () => {
    setData({
      id: "",
      label: "",
      value: 0,
      done: false,
    });
  };
  return (
    <li className={`TodoItem ${data.done ? "done" : ""}`}>
      <span className="text">id: {data.id}</span>
      <span className="text">label: {data.label}</span>
      <span className="text">value: {data.value}</span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
