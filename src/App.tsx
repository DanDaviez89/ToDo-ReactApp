import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const saveTodos = (newTodos: string[]) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // Add a new todo
  const addTodo = (todo: string) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  // Delete a todo
  const handleDeleteTodo = (todoKey: number) => {
    const updatedTodos = todos.filter((_, index) => index !== todoKey);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  // Edit a todo
  const handleEdit = (todoKey: number, todo: String) => {
    setInputValue(String(todo));
    handleDeleteTodo(todoKey);
  };

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  return (
    <div>
      <h1 className="pageTitle">To-Do Application</h1>
      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        deleteTodo={handleDeleteTodo}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
