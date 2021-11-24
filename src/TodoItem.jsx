import "./TodoItem.css";

function TodoItem(props) {
  const condicion = props;
  console.log(condicion);
  return (
    <li>
      <div className="container-items">
        <i className={`fas fa-check-square check ${props.completed && 'check-activate'}`}></i>
        <p className={`task ${props.completed && 'check-activate-text'}`}>{props.text}</p>
        <i className="far fa-trash-alt delete"></i>
      </div>
    </li>
  );
}

export { TodoItem };
