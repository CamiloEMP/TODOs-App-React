import { useContext } from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="input"
      placeholder="Search Tasks"
      value={searchValue}
      onChange={onSearchValue}
    />
  );
}

export { TodoSearch };
