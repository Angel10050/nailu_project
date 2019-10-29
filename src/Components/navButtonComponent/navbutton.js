import React from 'react';

import './navButtonStyle.css'; 

const Button = ({ name, link }) => {
  return (
    <a className='text' href={link}>
      {name}
    </a>
  );
};

export default Button;
