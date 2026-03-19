import "./ToDoList.css";
import { useSelector } from "react-redux";

function ToDoList({ onToggle }) {
  const todos = useSelector((state) => state.todos);
  //const todos = store.getState().todos;

  return (
    <div className="list-container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>

            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>

            <button onClick={() => onToggle(index)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
