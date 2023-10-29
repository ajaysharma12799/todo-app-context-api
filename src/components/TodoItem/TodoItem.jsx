/* eslint-disable react/prop-types */
const TodoItem = ({ todo, changeFinished }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        value={todo?.isCompleted}
        onChange={(e) => {
          changeFinished(e.target.value);
        }}
      />
      <span>{todo?.data}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
