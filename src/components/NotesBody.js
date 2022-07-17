import React from "react";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";

function NotesBody({ notes, addNote, onDelete, onArchive, query }) {
  return (
    <main className="mx-auto max-w-screen-md px-5 py-5 font-primary md:px-0">
      <NotesInput addNote={addNote} />
      <NotesList
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        query={query}
      />
    </main>
  );
}

export default NotesBody;
