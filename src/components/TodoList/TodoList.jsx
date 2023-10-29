/* eslint-disable react/prop-types */
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      {todos.length === 0 ? (
        <h1>No Todo</h1>
      ) : (
        todos.map((todo, idx) => {
          return (
            <TodoItem
              todo={todo}
              changeFinished={(isCompleted) => {
                const updatedTodos = todos.map((t) => {
                    if(t.id === todo?.id) {
                        t.isCompleted = isCompleted;
                    }
                    return t;
                })
                
                setTodos(updatedTodos);
              }}
              key={idx}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;
