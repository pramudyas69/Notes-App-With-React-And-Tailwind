import React from "react";
import NotesSearch from "./NotesSearch";

function NotesHeader({ onSearch, query }) {
  return (
    <header className="sticky top-0 z-20  bg-white font-primary">
      <div className="mx-auto flex max-w-screen-md items-center justify-between border-b-2 border-black px-5 py-5 md:px-0">
        <h1 className="text-4xl font-bold">Notes App</h1>
        <NotesSearch onSearch={onSearch} query={query} />
      </div>
    </header>
  );
}

export default NotesHeader;
