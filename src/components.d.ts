declare module './components/TodoInput' {
  import { FunctionComponent } from 'react';

  interface TodoInputProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    addTodo: (todo: string) => void;
  }

  const TodoInput: FunctionComponent<TodoInputProps>;
  export default TodoInput;
}

declare module './components/TodoList' {
  import { FunctionComponent } from 'react';

  interface TodoListProps {
    todos: string[];
    deleteTodo: (index: number) => void;
    handleEdit: (index: number, todo: string) => void;
  }

  const TodoList: FunctionComponent<TodoListProps>;
  export default TodoList;
}