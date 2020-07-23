import React, { useState } from "react";

const CreateItem = (props) => {
  const [item, setItem] = useState({ title: "", content: "" });

  const inputVal = (e) => {
    // const val = e.target.value;

    const { name, value } = e.target;

    console.log("the name & value is ", name, value);

    setItem((old) => {
      return { ...old, [name]: value };
    });
  };

  const addNote = (e) => {
    e.preventDefault();
    console.log("added");
    props.onSelect(item);
    setItem({ title: "", content: "" });
  };

  return (
    <>
      <div className="createNote">
        <form onSubmit={addNote}>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={item.title}
            onChange={inputVal}
          />
          <textarea
            row=""
            col=""
            name="content"
            value={item.content}
            onChange={inputVal}
            placeholder="Enter the note"
          />
          <button type="submit">+</button>
        </form>
      </div>
    </>
  );
};

export default CreateItem;
