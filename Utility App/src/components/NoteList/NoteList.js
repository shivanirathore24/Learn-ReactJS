import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";
// import { deleteNote } from "../../redux/actions/noteActions";
import "./NoteList.css";

function NoteList() {
  const notes = useSelector(noteSelector);
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
              onClick={() => dispatch(actions.delete(index))}
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
