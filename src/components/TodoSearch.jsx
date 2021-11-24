import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValue = (event) => {
    console.log(event.target.value);
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
