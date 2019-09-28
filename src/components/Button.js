import React from "react";

const Button = ({nameBtn, callback}) => {
  return (
    <div>
      <button className="button" onClick={callback}>{nameBtn}</button>
    </div>
  );
};
export default Button;
