import React from "react";

import "./ButtonGeneralStyle.css";


const ButtonGeneral = ({ nameBtn, callback }) => {

  return (
    <button type="button" className="btn btn-primary button" onClick={callback}>
      {nameBtn}
    </button>
  );

};

export default ButtonGeneral;
