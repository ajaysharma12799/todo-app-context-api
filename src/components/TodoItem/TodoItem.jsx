import { useContext, useState } from "react";
import { TodoContextObj } from "../../context/TodoContext";

/* eslint-disable react/prop-types */
const TodoItem = ({ todo, changeFinished }) => {
  const { dispatch } = useContext(TodoContextObj);
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
          dispatch({
            type: "edit_todo",
            payload: {
              id: todo.id,
              todoText: editValue,
            },
          });
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "delete_todo",
            payload: { id: todo.id },
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
