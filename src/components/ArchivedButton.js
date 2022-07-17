import React from "react";

function ArchivedButton({ id, archived, onArchive }) {
  return (
    <button
      className="flex-1 rounded-lg border-2 border-black bg-green-500 py-2"
      onClick={() => onArchive(id)}
    >
      {archived ? "Moved" : "Archived"}
    </button>
  );
}

export default ArchivedButton;
