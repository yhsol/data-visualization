import React from "react";
import TodoItem from "./TodoItem";
import PieChart from "../../nivo/PieChart";

function todoList({ todos }) {
  console.log("todolist's todos: ", todos);
  return (
    <>
      <ul>
        {todos && todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </ul>
      <PieChart datas={todos} />
    </>
  );
}

export default todoList;
