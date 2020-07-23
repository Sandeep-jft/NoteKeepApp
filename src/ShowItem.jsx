import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const ShowItem = (props) => {
  return (
    <>
      <div className="displayNote">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          <DeleteOutlineIcon />
        </button>
      </div>
    </>
  );
};

export default ShowItem;
