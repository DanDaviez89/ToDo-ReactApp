import React, { useState } from "react";

const TodoInput = ({ addTodo, inputValue, setInputValue }) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(""); // Clear the input field after adding the todo
    }
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add</button>
    </header>
  );
};

export default TodoInput;
