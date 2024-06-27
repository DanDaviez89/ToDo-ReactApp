import React from "react";

const TodoCard = ({ todo, todoKey, deleteTodo, handleEdit }) => {
  const handleDeleteTodo = () => {
    deleteTodo(todoKey);
  };

  const editClicked = () => {
    handleEdit(todoKey, todo);
  };

  return (
    <li className="todoItem" key={todoKey}>
      {todo}
      <div>
        {/* Edit */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 1024 1024"
          onClick={editClicked}
        >
          <path
            fill="black"
            d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"
          />
          <path
            fill="black"
            d="m469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
          />
        </svg>

        {/* Delete */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          onClick={handleDeleteTodo}
        >
          <path
            fill="black"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
          />
        </svg>
      </div>
    </li>
  );
};

export default TodoCard;
