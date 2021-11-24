// import './App.css';
import { HeaderNav } from "./HeaderNav";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {
    text: 'Cortar pizza',
    complete: true,
  },
  {
    text: 'Comer pizza',
    complete: true,
  },
  {
    text: 'Tomar gaseosa',
    complete: false,
  }
]

function App() {
  return (
    <>
    <HeaderNav />
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.complete}/>
      ))}
    </TodoList>
    <CreateTodoButton />
    </>
  );
}

export default App;
