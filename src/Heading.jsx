import React from "react";
import logo from "./logo.png";

const Heading = () => {
  return (
    <>
      <div className="Heading">
        <img src={logo} alt="Header" height="160" width="150" />

        <h1>Note keep app</h1>
      </div>
    </>
  );
};

export default Heading;
