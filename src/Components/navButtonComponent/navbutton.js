import React from "react";
import "./navButtonStyle.css";

const Button = ({ name, link }) => {
  return (
    <a href={link} target="_blank">
    {name}
  </a>
  );
};
export default Button;
