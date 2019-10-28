import React from 'react';
import './NavComponentStyle.css';

import { Nav, Navbar } from 'react-bootstrap';

import Logo from '../logo/Logo';
import NavButton from '../navButtonComponent/navbutton';

const NavComponent = props => {
  return (
    <Navbar
      className='componentFlex'
      collapseOnSelect
      sticky='top'
      expand='sm'
      bg='dark'
      variant='dark'
    >
      <Navbar.Brand className='componentFlexLogo'>
        <Logo onClick={props.toScrollup} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsiveNavbar' />
      <Navbar.Collapse id='responsiveNavbar'>
        <Nav className='componentFlexButton mr-auto'>
          <NavButton link='#inicio' name='Inicio' />
          <NavButton link='#reservas' name='Reservas' />
          <NavButton link='#galeria' name='Galeria' />
          <NavButton link='#contacto' name='Contacto' />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
