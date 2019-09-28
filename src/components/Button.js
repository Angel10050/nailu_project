import React from "react";

const Button = ({name, callback}) => {
  return (
    <div>
      <button className="button" onClick={callback}>{name}</button>
    </div>
  );
};
export default Button;
