import React from 'react';

import './navButtonStyle.css'; 

const Button = ({ name, link, onClick }) => {
  return (
    <a className='text' href={link} onClick={onClick}>
      {name}
    </a>
  );
};

export default Button;
