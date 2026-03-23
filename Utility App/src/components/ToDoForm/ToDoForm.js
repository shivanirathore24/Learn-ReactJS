import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/todoReducer";
// import { addTodo } from "../../redux/actions/todoActions";
import styles from "./ToDoForm.module.css";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const notification = useSelector(notificationSelector);
  const { message, type } = notification;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(resetNotification());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    dispatch(actions.add(todoText));
    // dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <div className={styles["form-container"]}>
      {message && (
        <div className={`alert alert-${type}`} role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default ToDoForm;
