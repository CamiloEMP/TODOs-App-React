import { useState } from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  {
    text: "Cortar pizza",
    complete: true,
  },
  {
    text: "Comer pizza",
    complete: false,
  },
  {
    text: "Tomar gaseosa",
    complete: false,
  },
  {
    text: "Tos",
    complete: false,
  },
  {
    text: "Tomaasdsa",
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => !!todo.complete).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    setTodos(newTodos);
    //Otra forma todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   complete: true
    // };
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    //Otra forma todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   complete: true
    // };
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
