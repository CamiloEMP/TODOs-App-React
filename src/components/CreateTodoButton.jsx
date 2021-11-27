import { useContext } from "react";
import "../styles/CreateTodoButton.css";
import { TodoContext } from "./TodoContext";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal(true);
  };

  return(
    <div className="container-button">
      <button className="button-add-task" onClick={onClickButton}>Create Task</button>
    </div>
  )
}

export { CreateTodoButton };
