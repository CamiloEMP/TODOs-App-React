import { useContext } from "react";
import { TodoContext } from "./components/TodoContext";
import { HeaderNav } from "./components/HeaderNav";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { CreateTask } from "./Modal/CreateTask";
import { TodoForm } from "./components/TodoForm";
function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <HeaderNav />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p style={{ color: "#fff" }}>ERROR</p>}
        {loading && <p style={{ color: "#fff" }}>Loading</p>}
        {!loading && !searchedTodos.length && (
          <p style={{ color: "#fff" }}>Create your first TODO</p>
        )}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {!!openModal && (
        <CreateTask>
          <TodoForm />
        </CreateTask>
      )}
    </>
  );
}

export { AppUI };
