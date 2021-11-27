import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import '../styles/TodoForm.css'

function TodoForm() {
  const [todoNew, setTodoNew] = useState("");
  const [newError, setNewError] = useState(false)
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event) => {
    setTodoNew(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todoNew !== "") {
      addTodo(todoNew);
      setOpenModal(false)
    } else {
      setNewError(true)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add Task</label>
      <textarea placeholder="Task..."
        value={todoNew}
        onChange={onChange} 
        autoFocus rows="5" 
        onClick={() => {
          setNewError(false)
        }} />
      <div className="TodoForm-container-buttons">
        <button className="btn-right btn" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn-left btn" type="submit" onClick={onSubmit}>
          Add
        </button>
      </div>
      {newError && (
        <p>You have to add a valid task</p>
      )}
    </form>
  );
}

export { TodoForm };
