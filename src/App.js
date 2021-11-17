// import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {
    text: 'Cortar pizza',
    complete: false,
  },
  {
    text: 'Comer pizza',
    complete: false,
  },
  {
    text: 'Tomar gaseosa',
    complete: false,
  }
]

function App() {
  return (
    <>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList>
    <CreateTodoButton />
    </>
  );
}

export default App;
