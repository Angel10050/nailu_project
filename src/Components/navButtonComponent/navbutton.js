import React from "react";
import "./navButtonStyle.css";

const Button = ({ name, callback, link }) => {
  return (
    <button className="text" name={name} onClick={callback}>
      {name}
    </button>
  );
};
export default Button;
