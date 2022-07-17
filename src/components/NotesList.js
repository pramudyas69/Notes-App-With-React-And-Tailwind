import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive, query }) {
  const unarchivedNotes = notes
    .filter((note) => note.archived === false)
    .filter((note) => {
      if (query) {
        return note.title.toLowerCase().includes(query.toLowerCase());
      }
      return true;
    });

  const archivedNotes = notes
    .filter((note) => note.archived === true)
    .filter((note) => {
      if (query) {
        return note.title.toLowerCase().includes(query.toLowerCase());
      }
      return true;
    });

  return (
    <>
      <section id="unarchivedNotes" className="mb-10">
        <h2 className="mb-3 text-3xl font-bold">Active Notes</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {unarchivedNotes.length > 0 ? (
            unarchivedNotes.map((note) => (
              <NotesItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
              />
            ))
          ) : (
            <p>Empty Notes</p>
          )}
        </div>
      </section>

      <section id="archivedNotes">
        <h2 className="mb-3 text-3xl font-bold">Archived Notes</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {archivedNotes.length > 0 ? (
            archivedNotes.map((note) => (
              <NotesItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
              />
            ))
          ) : (
            <p>Empty Notes</p>
          )}
        </div>
      </section>
    </>
  );
}

export default NotesList;
