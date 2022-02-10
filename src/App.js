import './App.css';
import uuid from 'react-uuid'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now()
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (noteId) =>{
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  return (
    <div className="App">
      <Sidebar 
        notes={notes} 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote}
      />
      <Main />
    </div>
  );
}

export default App;
