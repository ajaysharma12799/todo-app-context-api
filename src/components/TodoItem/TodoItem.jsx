import { useState } from "react";

/* eslint-disable react/prop-types */
const TodoItem = ({ todo, changeFinished, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.data);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        value={todo?.isCompleted}
        onChange={(e) => {
          changeFinished(e.target.value);
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <span>{todo?.data}</span>
      )}
      <button
        onClick={() => {
          setIsEditing(!isEditing);
          editTodo(todo.id, editValue);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
