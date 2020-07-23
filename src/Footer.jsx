import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <span>copyrights &copy; {currentYear}</span>
      </footer>
    </>
  );
};

export default Footer;
