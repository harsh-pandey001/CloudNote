import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    //API Call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmZlYjM5NWE4M2QwMmYwOTE5NDIwIn0sImlhdCI6MTY5MDMwNDE3OX0.Ukdo3iS3oA3CdV4A7EiwC38BQcRjVvYrtb8SdDFpq3s",
      },
    });
    
    const json = await response.json()
    console.log(json);
    setNotes(json)
     
  };
  // Add a Note
  const addNote = async (title, description, tag) => {
    //TODO API Call
    //API Call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmZlYjM5NWE4M2QwMmYwOTE5NDIwIn0sImlhdCI6MTY5MDMwNDE3OX0.Ukdo3iS3oA3CdV4A7EiwC38BQcRjVvYrtb8SdDFpq3s ",
      },
      body: JSON.stringify({title, description, tag}),
    });
   
    console.log("Adding a New Node");
    const note = {
      _id: "6158b37b273c6a62f47e",
      user: "64bffeb395a83d02f0919420",
      title: title,
      description: description,
      tag: tag,
      Date: "2023-07-26T17:32:35.406Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call

    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmZlYjM5NWE4M2QwMmYwOTE5NDIwIn0sImlhdCI6MTY5MDMwNDE3OX0.Ukdo3iS3oA3CdV4A7EiwC38BQcRjVvYrtb8SdDFpq3s ",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json =  response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
