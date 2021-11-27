import "../styles/TodoItem.css";

function TodoItem(props) {
  return (
    <li>
        <i
          className={`fas fa-check-square check ${
            props.completed && "check-activate"
          }`}
          onClick={props.onComplete}
        ></i>
        <p className={`task ${props.completed && "check-activate-text"}`}>
          {props.text}
        </p>
        <i className="far fa-trash-alt delete" onClick={props.onDelete}></i>
    </li>
  );
}

export { TodoItem };
