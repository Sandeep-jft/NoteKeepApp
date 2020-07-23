import React, { useState } from "react";
import "./App.css";
import Heading from "./Heading";
import Footer from "./Footer";
import CreateItem from "./CreateItem";
import ShowItem from "./ShowItem";

const App = () => {
  const [note, setNote] = useState([]);

  const createNote = (note) => {
    console.log("created note ", note);
    setNote((oldNote) => {
      return [...oldNote, note];
    });
  };

  const deleteNote = (id) => {
    console.log(id + " Note is deleted");
    setNote((oldNote) => {
      return oldNote.filter((elem, index) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      <Heading />
      <CreateItem onSelect={createNote} />
      {note.map((elem, index) => {
        return (
          <ShowItem
            title={elem.title}
            content={elem.content}
            key={index}
            id={index}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
