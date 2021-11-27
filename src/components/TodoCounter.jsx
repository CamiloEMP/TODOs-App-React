import { useContext } from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "./TodoContext";
function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <div>
      <h1>How is your day?</h1>
      <h2>
        You have completed {completedTodos} of {totalTodos} TODOs
      </h2>
    </div>
  );
}

export { TodoCounter };
