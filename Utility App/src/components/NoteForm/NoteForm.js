import { useState } from "react";
import { addNote } from "../../redux/actions/noteActions";
import { useDispatch } from "react-redux";
import "./NoteForm.css";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return; 
    dispatch(addNote(noteText));
    setNoteText("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
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
