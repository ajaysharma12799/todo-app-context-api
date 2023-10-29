/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from 'uuid';

const TodoForm = ({ addTodo }) => {
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
          <button onClick={(e) => {
            e.preventDefault();
            
            const todoObj = {
                id: uuid(),
                data: value, 
                isFinished: false,
            }
            addTodo(todoObj);
          }} >Add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
