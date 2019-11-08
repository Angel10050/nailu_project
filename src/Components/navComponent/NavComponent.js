import React from 'react'
import './NavComponentStyle.css'

import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../logo/Logo'
import NavButton from '../navButtonComponent/navbutton'

const NavComponent = props => {
  return (
    <div className="container-fluid fluidNav" id="home">
      <Navbar
       className="componentFlex"
        collapseOnSelect
        sticky="top"
        expand="sm"
        variant="dark"
      >
        <Navbar.Brand className="componentFlexLogo">
          <Logo onClick={props.toScrollup} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsiveNavbar" />
        <Navbar.Collapse id="responsiveNavbar">
          <Nav className="componentFlexButton mr-auto">
            <NavButton onClick={props.toScrollup} link="#home" name="Inicio" />
            <NavButton link="#boxComponent" name="Reservas" />
            <NavButton link="#gallery" name="Galeria" />
            <NavButton link="#footer" name="Contacto" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavComponent
