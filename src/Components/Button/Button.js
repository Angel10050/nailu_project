import React from "react";

import "./ButtonGeneralStyle.css";


const ButtonGeneral = ({ nameBtn, callback, type }) => {

  return (
    <button type={type} className="btn btn-primary button" onClick={callback}>
      {nameBtn}
    </button>
  );

};

export default ButtonGeneral;