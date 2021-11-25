import { TodoContext } from "./components/TodoContext";
import { HeaderNav } from "./components/HeaderNav";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

function AppUI() {
  return (
    <>
      <HeaderNav />
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => (
          <TodoList>
            {error && <p style={{ color: "#fff" }}>ERROR</p>}
            {loading && <p style={{ color: "#fff" }}>Cargando</p>}
            {!loading && !searchedTodos.length && (
              <p style={{ color: "#fff" }}>Crea tu primer TODO</p>
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
