import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Learn React state management inside out." },
    { id: 2, text: "Build 50 apps in the web dev challenge!" }
  ]);
  const [inputText, setInputText] = useState("");

  // 1. Add a new note
  const addNote = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newNote = {
      id: Date.now(),
      text: inputText
    };

    setNotes([newNote, ...notes]);
    setInputText("");
  };

  // 2. Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h2>Simple Notes 📝</h2>

      {/* Note Input Form */}
      <form onSubmit={addNote}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Write a new note..."
          rows="3"
        />
        <button type="submit">Add Note</button>
      </form>

      {/* Notes List / Grid */}
      <div className="notes-container">
        {notes.length === 0 ? (
          <p className="empty-text">No notes yet. Add one above!</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="note-card">
              <p>{note.text}</p>
              <button className="delete-btn" onClick={() => deleteNote(note.id)}>
                &times;
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}