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
<<<<<<< HEAD
            <NavButton link="#inicio" name="Inicio" />
            <NavButton link="#reservas" name="Reservas" />
            <NavButton link="#gallery" name="Galeria" />
            <NavButton link="#contacto" name="Contacto" />
=======
            <NavButton onClick={props.toScrollup} link="#home" name="Inicio" />
            <NavButton link="#boxComponent" name="Reservas" />
            <NavButton link="#gallery" name="Galeria" />
            <NavButton link="#footer" name="Contacto" />
>>>>>>> 500fc94a27075ba251f55b735a7345143bba6ba1
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavComponent
