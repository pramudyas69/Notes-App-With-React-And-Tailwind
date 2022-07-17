import React from "react";
import NotesItem from "./NotesItem";

function NotesArchivedList({ notes, onDelete, query }) {
  const archivedNotes = notes.filter((note) => note.archived === true);
  const filteredNotes = archivedNotes.filter((note) => {
    if (query) {
      return note.title.toLowerCase().includes(query.toLowerCase());
    }
    return true;
  });

  return (
    <section id="unarchivedNotes" className="mb-10">
      <h2 className="mb-3 text-3xl font-bold">Archived Notes</h2>
      <div className="grid grid-cols-2 gap-8">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))
        ) : (
          <p>Empty Notes</p>
        )}
      </div>
    </section>
  );
}

export default NotesArchivedList;
