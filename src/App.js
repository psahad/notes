import './App.css';
import uuid from 'react-uuid'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now()
    };
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updateNote) => {
    const updatedNoteArray = notes.map((note) => {
      if(note.id === activeNote){
        return updateNote
      };
      return note;
    })
    setNotes(updatedNoteArray)
  }

  const onDeleteNote = (noteId) =>{
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  const getActiveNote = () => {
    return notes.find(note => note.id == activeNote)
  }

  return (
    <div className="App">
      <Sidebar 
        notes={notes} 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main 
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
