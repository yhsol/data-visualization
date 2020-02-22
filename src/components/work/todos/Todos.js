import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import PieChart from "../../nivo/PieChart";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: "",
    label: "",
    value: 0,
    done: false,
  });

  const onChange = e => {
    const { name, value } = e.target;
    if (name === "value") {
      setTodo({
        ...todo,
        value: Number(value),
      });
    }

    if (name !== "value") {
      setTodo({
        ...todo,
        [name]: value,
      });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const onClick = () => {
    setTodos([...todos, todo]);
    setTodo({
      id: "",
      label: "",
      value: 0,
      done: false,
    });
  };

  const onToggle = e => {
    const { name } = e.target;
    setTodos(
      todos.map(todo =>
        todo.id === `${name}` ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const onRemove = e => {
    const { name } = e.target;
    setTodos(todos.filter(todo => todo.id !== name));
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          value={todo.id}
          onChange={onChange}
          name="id"
          placeholder="이름"
        />
        <Input
          value={todo.label}
          onChange={onChange}
          name="label"
          placeholder="설명"
        />
        <Input
          value={todo.value}
          onChange={onChange}
          name="value"
          placeholder="기간"
        />
        <Button onClick={onClick}>등록</Button>
      </Form>
      <ul>
        {todos.map(item => (
          <div key={item.id}>
            <span>{item.id}</span>
            <Button onClick={onToggle} name={item.id}>
              V
            </Button>
            <Button onClick={onRemove} name={item.id}>
              X
            </Button>
          </div>
        ))}
      </ul>
      <PieChart datas={todos} />
    </>
  );
}

export default Todos;
