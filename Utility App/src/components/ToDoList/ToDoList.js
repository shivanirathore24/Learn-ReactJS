import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
//import { toggleTodo } from "../../redux/actions/todoActions";
import "./ToDoList.css";

function ToDoList() {
  const todos = useSelector(todoSelector);
  console.log(todos);
  const dispatch = useDispatch();
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

            <button
              className="toggle-btn"
              onClick={() => dispatch(actions.toggle(index))}
            >
              Toggle
            </button>

            {/* <button
              className="toggle-btn"
              onClick={() => dispatch(toggleTodo(index))}
            >
              Toggle
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
