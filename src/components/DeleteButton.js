import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="flex-1 rounded-lg border-2 border-black bg-red-700 py-2"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
