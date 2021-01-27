import React from "react";

const NoteContent = ({ note }) => {
  return (
    <div className="content">
      {note && (
        <>
          <h1>{note.head} </h1>
          <p>{note.text}</p>
        </>
      )}
      {!note && <h2>Not Found</h2>}
    </div>
  );
};
export default NoteContent;
