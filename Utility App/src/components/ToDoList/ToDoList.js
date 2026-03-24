import { useSelector, useDispatch } from "react-redux";
import { actions, getInitialState } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
//import { toggleTodo } from "../../redux/actions/todoActions";
import { useEffect } from "react";
//import axios from "axios";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  //const todos = store.getState().todos;

  useEffect(() => {
    dispatch(getInitialState());
  }, [dispatch]);

  //Way-1
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/todos")
  //     .then((res) => res.json())
  //     .then((parsedJson) => {
  //       console.log("Todos from backend:", parsedJson);
  //     })
  //     .catch((err) => {
  //       console.error("Fetch failed:", err);
  //     });
  // }, []);

  //Way-2
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/todos").then((res) => {
  //     console.log("Todos from backend:", res.data);
  //     dispatch(actions.setInitialState(res.data));
  //   });
  // }, [dispatch]);

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
