import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/10/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/10/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/10/2021",
    }
  ]);

  const addNote = (text) =>{
    console.log(text);
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  )
}

export default App;