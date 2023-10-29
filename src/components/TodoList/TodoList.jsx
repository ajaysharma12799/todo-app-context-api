/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContextObj } from "../../context/TodoContext";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContextObj);

  const changeFinished = (todo, isCompleted) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo?.id) {
        t.isCompleted = isCompleted;
      }
      return t;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      {todos.length === 0 ? (
        <h1>No Todo</h1>
      ) : (
        todos.map((todo, idx) => {
          return (
            <TodoItem
              todo={todo}
              changeFinished={(isCompleted) =>
                changeFinished(todo, isCompleted)
              }
              key={idx}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;
