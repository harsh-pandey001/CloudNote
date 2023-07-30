import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
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
      _id: "64c007021aba5ef4d0e71283",
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
      _id: "64c007021aba5ef4d0e71283",
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
      _id: "64c007021aba5ef4d0e71283",
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
      _id: "64c01f19e5907357a1ad9d12",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Plee Wake up ear",
      tag: "personal",
      Date: "2023-07-25T19:14:33.184Z",
      __v: 0,
    },
    {
      _id: "64c158b37ba273cc6a62f47e",
      user: "64bffeb395a83d02f0919420",
      title: "my Title",
      description: "Plee Wake ear",
      tag: "personal",
      Date: "2023-07-26T17:32:35.406Z",
      __v: 0,
    },
  ];

const [notes, setNotes] = useState(notesInitial)

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
