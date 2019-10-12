import React from 'react';
import './ButtonGeneralStyle.css'

const ButtonGeneral = ({nameBtn, callback}) => {
  return (
    <div>
      <button type='button' class='btn btn-primary button' onClick={callback}>{nameBtn}</button>
    </div>
  );
};
export default ButtonGeneral;
