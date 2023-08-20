<<<<<<< HEAD
import React, { useContext, useState, useRef } from "react";
=======
import React, { useContext,useState, useRef } from "react";
>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useEffect } from "react";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
<<<<<<< HEAD
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    console.log("updating the Note....", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    
=======
  const [note, setNote] = useState({ id:"", etitle: "", edescription: "", etag: "default" });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle : currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  };

  const handleClick = (e) => {
    console.log("updating the Note....", note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
=======


>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
  return (
    <>
      <AddNote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
<<<<<<< HEAD
                    minLength={5}
                    required
=======
>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
<<<<<<< HEAD
                    minLength={5}
                    required
=======
>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
<<<<<<< HEAD
=======

>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
              </form>
            </div>
            <div className="modal-footer">
              <button
<<<<<<< HEAD
                ref={refClose}
=======
              ref={refClose}
>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
<<<<<<< HEAD
              <button
                disabled={note.etitle.length < 5 || note.edescription.length < 5}
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
=======
              <button onClick={handleClick} type="button" className="btn btn-primary">
>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className=" row my-3">
=======
      <div className="row my-3">
>>>>>>> 436e5be3307bb0fbb439c2936ba6a1a1e83666dd
        <h2>Your Notes</h2>
        <div className="Container mx-2 my-2">
          {notes.length === 0 && " No notes to display "}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
