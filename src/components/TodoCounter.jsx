import '../styles/TodoCounter.css'
function TodoCounter({ total, completed }) {
  return (
    <div>
      <h1>How is your day?</h1>
      <h2>You have completed {completed} of {total} TODOs</h2>
    </div>
  );
}

export { TodoCounter };