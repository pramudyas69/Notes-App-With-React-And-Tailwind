import React from "react";
import autoBindReact from "auto-bind/react";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);

    this.state = {
      notes: getInitialData(),
      query: "",
    };
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toJSON(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNotesHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchNotesHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        query: event.target.value,
      };
    });
  }

  onArchivedNotesHandler(id) {
    const { notes } = this.state;
    const notesIndex = this.state.notes.findIndex((note) => note.id === id);
    notes[notesIndex].archived = !notes[notesIndex].archived;
    return this.setState({ notes });
  }

  render() {
    return (
      <>
        <NotesHeader
          onSearch={this.onSearchNotesHandler}
          query={this.state.query}
        />
        <NotesBody
          notes={this.state.notes}
          addNote={this.onAddNotesHandler}
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onArchivedNotesHandler}
          query={this.state.query}
        />
      </>
    );
  }
}

export default NotesApp;
