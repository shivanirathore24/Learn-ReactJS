import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";
import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    dispatch(addTodo(todoText));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
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
