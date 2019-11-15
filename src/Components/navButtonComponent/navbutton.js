import React from 'react';
import { Link } from 'react-scroll'
import './navButtonStyle.css'; 

const Button = ({ name, to, offset }) => {
  return (
    <Link className='text' to={to} offset={offset} spy={true} smooth={true} duration={850} >
      {name}
    </Link>
  );
};

export default Button;
