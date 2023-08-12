import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64c00702s1aba5ef4d0e71283",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Please Wake up early",
      tag: "personal",
      Date: "2023-07-25T17:31:46.565Z",
      __v: 0,
    },
    {
      _id: "64c00702d1aba5ef4d0e71283",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Please Wake up early",
      tag: "personal",
      Date: "2023-07-25T17:31:46.565Z",
      __v: 0,
    },
    {
      _id: "64c00721aba5ef4d0e71283",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Please Wake up early",
      tag: "personal",
      Date: "2023-07-25T17:31:46.565Z",
      __v: 0,
    },
    {
      _id: "64c007021aba5ef4d0e71283",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Please Wake up early",
      tag: "personal",
      Date: "2023-07-25T17:31:46.565Z",
      __v: 0,
    },
    {
      _id: "64c0070det21aba5ef4d0e71283",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Please Wake up early",
      tag: "personal",
      Date: "2023-07-25T17:31:46.565Z",
      __v: 0,
    },
    {
      _id: "64c0070s21aba5ef4d0e71283",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Please Wake up early",
      tag: "personal",
      Date: "2023-07-25T17:31:46.565Z",
      __v: 0,
    },
    {
      _id: "64ca007021aba5ef4d0e71283",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Please Wake up early",
      tag: "personal",
      Date: "2023-07-25T17:31:46.565Z",
      __v: 0,
    },
    {
      _id: "64c019e5907357a1a9d12",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Plee Wake up ear",
      tag: "personal",
      Date: "2023-07-25T19:14:33.184Z",
      __v: 0,
    },
    {
      _id: "618b37ba273cc6a62f47e",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Plee Wake ear",
      tag: "personal",
      Date: "2023-07-26T17:32:35.406Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    //TODO API Call
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
  const deleteNote = () => {};

  // Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote  }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
