import { useSelector, useDispatch } from "react-redux";
import { getNotes, deleteNote } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";
// import { deleteNote } from "../../redux/actions/noteActions";
import { useEffect } from "react";
import styles from "./NoteList.module.css";

function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div className={styles["list-container"]}>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <span className={styles["note-content"]}>{note.text}</span>

            <span className={styles["note-date"]}>
              {new Date(note.createdOn).toLocaleDateString()}
            </span>

            <button
              className={styles["delete-btn"]}
              onClick={() => dispatch(deleteNote(note._id))}
            >
              Delete
            </button>
            {/* <button
              className="delete-btn"
              onClick={() => dispatch(deleteNote(index))}
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
