import React from "react";
import NotesItemHeader from "./NotesItemHeader";
import NotesItemBody from "./NotesItemBody";
import NotesItemFooter from "./NotesItemFooter";

function NotesItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  archived,
  onArchive,
}) {
  return (
    <>
      <div className="flex h-full flex-col rounded-lg border-2 border-black bg-white p-5">
        <NotesItemHeader title={title} createdAt={createdAt} />
        <NotesItemBody body={body} />
        <NotesItemFooter
          id={id}
          onDelete={onDelete}
          archived={archived}
          onArchive={onArchive}
        />
      </div>
    </>
  );
}

export default NotesItem;
