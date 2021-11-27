import "../styles/TodoList.css";
function TodoList(props) {
  return (
    <section className="tasks-container">
      <div className="scroll">
        <ul>{props.children}</ul>
      </div>
    </section>
  );
}

export { TodoList };
