import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/noteReducer";
// import { addNote } from "../../redux/actions/noteActions";
import styles from "./NoteForm.module.css";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
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
    if (!noteText.trim()) return;
    dispatch(actions.add(noteText));
    // dispatch(addNote(noteText));
    setNoteText("");
  };

  return (
    <div className={styles["form-container"]}>
      {message && (
        <div className={`alert alert-${type}`} role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          placeholder="Write your note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default NoteForm;
