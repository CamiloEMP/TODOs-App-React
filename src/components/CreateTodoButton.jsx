import "../styles/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      onClick={() => {
        console.log("Hola");
      }}
    >
      Create Task
    </button>
  );
}

export { CreateTodoButton };
