/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoContextObj } from "../../context/TodoContext";

const TodoForm = () => {
  const { todos, setTodos } = useContext(TodoContextObj);
  const [value, setValue] = useState("");

  return (
    <div>
      <form>
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter Something..."
            type="text"
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();

              const todoObj = {
                id: uuid(),
                data: value,
                isFinished: false,
              };

              setTodos([...todos, todoObj]);
              setValue("");
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
