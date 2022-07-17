import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NotesItemFooter({ id, onDelete, archived, onArchive }) {
  return (
    <div className="mt-auto flex w-full gap-3">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchivedButton id={id} archived={archived} onArchive={onArchive} />
    </div>
  );
}

export default NotesItemFooter;
