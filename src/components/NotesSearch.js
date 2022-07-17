import React from "react";

function NotesSearch({ onSearch, query }) {
  return (
    <>
      <input
        type="text"
        className="max-w-[15rem] rounded-lg border-2 border-black py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-700 md:w-full md:max-w-xs"
        placeholder="Find Notes..."
        onChange={onSearch}
        value={query}
      />
    </>
  );
}

export default NotesSearch;
