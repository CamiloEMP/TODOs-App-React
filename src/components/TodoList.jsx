import '../styles/TodoList.css'
function TodoList(props) {
  return (
    <section className="tasks-container">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };