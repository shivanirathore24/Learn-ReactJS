import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {
  const notes = useSelector((state) => state.noteReducer.notes);
  const dispatch = useDispatch();
  return (
    <div className="list-container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <span className="note-content">{note.text}</span>

            <span className="note-date">
              {note.createdOn.toLocaleDateString()}
            </span>

            <button
              className="delete-btn"
              onClick={() => dispatch(deleteNote(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
