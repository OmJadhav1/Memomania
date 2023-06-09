import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => {
        return <Note title={note.title} content={note.des} />;
      })}
      <Footer />
    </>
  );
}

export default App;
