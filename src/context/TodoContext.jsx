/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

export const TodoContextObj = createContext();

const TodoContext = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContextObj.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContextObj.Provider>
  );
};

export default TodoContext;
