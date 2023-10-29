/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoContextObj = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      data: "Todo 1",
      isFinished: false,
    },
    {
      id: uuid(),
      data: "Todo 2",
      isFinished: false,
    },
  ]);
  return (
    <TodoContextObj.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContextObj.Provider>
  );
};

export default TodoContext;
