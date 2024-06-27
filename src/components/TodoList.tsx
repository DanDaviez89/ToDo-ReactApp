import TodoCard from "./TodoCard";

interface Props {
  todos: string[];
  deleteTodo: (todoKey: number) => void;
  handleEdit: (todoKey: number, todo: string) => void;
}

const TodoList = ({ todos, deleteTodo, handleEdit }: Props) => {
  return (
    <ul>
      {todos.map((todo, todoKey) => (
        <TodoCard
          key={todoKey}
          todoKeyLocal={todoKey}
          todo={todo}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
