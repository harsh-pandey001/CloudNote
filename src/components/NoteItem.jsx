import React from "react";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
         
          <h5 className="card-title">{note.title}</h5>
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-trash mx-2"></i>
            <i className="fa-solid fa-file-pen mx-2"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
