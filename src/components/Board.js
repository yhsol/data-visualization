import React, { useState, useRef } from "react";
import Todos from "./work/todos/Todos";
import { Input, Button, Form } from "antd";
import styled from "styled-components";

const SpaceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 500px;
`;

const SpaceWrapper = styled.div`
  margin: 1rem;
`;

function Board() {
  const [spaces, setSpaces] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [space, setSpace] = useState({
    id: nextId,
    name: "",
  });

  const onChange = e => {
    const { value } = e.target;
    setSpace({
      id: nextId,
      name: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const onClick = () => {
    setSpaces([...spaces, space]);
    setSpace({
      id: nextId,
      name: "",
    });
    setNextId(nextId + 1);
  };

  const onRemove = e => {
    setSpaces(spaces.filter(item => item.id !== Number(e.target.id)));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          value={space.name}
          onChange={onChange}
          name="name"
          placeholder="워크 스페이스"
        />
        <Button onClick={onClick}>등록</Button>
      </Form>
      <SpaceGrid>
        {spaces.map(item => (
          <SpaceWrapper key={item.id}>
            <div>{item.name}</div>
            <Button onClick={onRemove} id={item.id}>
              X
            </Button>
            <Todos />
          </SpaceWrapper>
        ))}
      </SpaceGrid>
    </div>
  );
}

export default Board;
