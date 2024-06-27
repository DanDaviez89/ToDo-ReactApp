interface Props {
  inputValue: string;
  setInputValue: (value: any) => void;
  addTodo: (todo: string) => void;
}

const TodoInput = ({ addTodo, inputValue, setInputValue }: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
