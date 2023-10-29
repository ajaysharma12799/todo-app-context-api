import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import { TodoContextObj } from "./context/TodoContext";
import { useContext } from "react";

const App = () => {
  const { todos, setTodos } = useContext(TodoContextObj);
  return (
    <div>
      <TodoForm addTodo={(value) => setTodos([...todos, value])} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App