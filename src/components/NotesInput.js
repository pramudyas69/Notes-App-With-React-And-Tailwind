import React from "react";
import autoBindReact from "auto-bind/react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    autoBindReact(this);

    this.state = {
      title: "",
      body: "",
      characterLeft: 50,
      isTitleEmpty: false,
      isBodyEmpty: false,
    };
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      const maxChar = 50;
      const inputTitle = event.target.value.slice(0, maxChar);
      const inputTitleLength = inputTitle.length;

      return {
        ...prevState,
        title: inputTitle,
        characterLeft: maxChar - inputTitleLength,
        isTitleEmpty: false,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
        isBodyEmpty: false,
      };
    });
  }

  onSubmitEventHandler(event) {
    const { title, body } = this.state;

    event.preventDefault();
    if (title === "" && body === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isTitleEmpty: true,
          isBodyEmpty: true,
        };
      });
    } else if (title === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isTitleEmpty: true,
        };
      });
    } else if (body === "") {
      this.setState((prevState) => {
        return {
          ...prevState,
          isBodyEmpty: true,
        };
      });
    } else {
      this.props.addNote(this.state);
      this.setState((prevState) => {
        return {
          ...prevState,
          title: "",
          body: "",
          characterLeft: 50,
        };
      });
    }
  }

  render() {
    return (
      <section id="inputForm" className="mb-10">
        <h2 className="mb-3 text-3xl font-bold">Create a Note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="title" className="mb-1 inline-block">
            Title
          </label>
          <input
            type="text"
            className="mb-1 w-full rounded-lg border-2 border-black py-2 text-black placeholder-gray-700 focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-700"
            name="title"
            id="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <div className="mb-5 flex items-center justify-between">
            <p>Remaining Characters : {this.state.characterLeft}</p>
            {this.state.isTitleEmpty ? (
              <p className="text-red-500">Title not Empty</p>
            ) : null}
          </div>
          <label htmlFor="body" className="mb-1 inline-block">
            Write your note
          </label>
          <textarea
            className={`h-32 w-full rounded-lg border-2 border-black py-2 text-black placeholder-gray-700 focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-700 ${
              !this.state.isBodyEmpty ? "mb-5" : ""
            }`}
            name="body"
            id="body"
            placeholder="Content of the note"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          {this.state.isBodyEmpty ? (
            <p className="mb-5 text-right text-red-500">Cannot be empty</p>
          ) : null}
          <button
            type="submit"
            className="block w-full flex-1 rounded-lg border-2 border-black bg-blue-500 py-2"
          >
            Create
          </button>
        </form>
      </section>
    );
  }
}

export default NotesInput;
