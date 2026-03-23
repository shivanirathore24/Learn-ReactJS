import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
//import { toggleTodo } from "../../redux/actions/todoActions";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const todos = useSelector(todoSelector);
  //console.log(todos);
  const dispatch = useDispatch();
  //const todos = store.getState().todos;

  return (
    <div className={styles["list-container"]}>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className={styles.content}>{todo.text}</span>

            <span
              className={todo.completed ? styles.completed : styles.pending}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>

            <button
              className={styles["toggle-btn"]}
              onClick={() => {
                //console.log("[LOG]: Todo - Toggle Action dispatched!");
                dispatch(actions.toggle(index));
              }}
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
