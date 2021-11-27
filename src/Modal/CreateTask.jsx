import ReactDOM from "react-dom";
import "./CreateTask.css"

function CreateTask({ children }) {
  return ReactDOM.createPortal(
    <div className="create-task-background">
      {children}
    </div>,
    document.getElementById("createTask")
  );
}

export { CreateTask }
