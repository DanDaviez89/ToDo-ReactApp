import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, deleteTodo, handleEdit }) => {
  return (
    <ul>
      {todos.map((todo, todoKey) => (
        <TodoCard
          key={todoKey}
          todo={todo}
          todoKey={todoKey}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
