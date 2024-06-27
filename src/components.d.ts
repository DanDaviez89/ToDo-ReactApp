// src/components.d.ts

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
    deleteTodo: (todoKey: number) => void;
    handleEdit: (todoKey: number, todo: string) => void;
  }

  const TodoList: FunctionComponent<TodoListProps>;
  export default TodoList;
}

declare module './components/TodoCard' {
  import { FunctionComponent } from 'react';

  interface TodoCardProps {
    todo: string;
    todoKey: number;
    deleteTodo: (todoKey: number) => void;
    handleEdit: (todoKey: number, todo: string) => void;
  }

  const TodoCard: FunctionComponent<TodoCardProps>;
  export default TodoCard;
}
