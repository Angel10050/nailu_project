import React from 'react'
import './NavComponentStyle.css'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../logo/Logo'
import NavButton from '../navButtonComponent/navbutton'

function NavComponent(props){

  return (
    <div className="container-fluid fluidNav">
      <Navbar
       className="componentFlex"
        collapseOnSelect
        sticky="top"
        expand="sm"
      >
        <Navbar.Brand className="componentFlexLogo">
          <Logo onClick={props.toScrollup} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsiveNavbar" />
        <Navbar.Collapse id="responsiveNavbar">
          <Nav className="componentFlexButton mr-auto">
            <NavButton to='home' name="Inicio" />
            <NavButton to="titleBoxComponent" offset={-95} name="Eventos" />
            <NavButton to='gallery' offset={-95} name="Galeria" />
            <NavButton to="footer" name="Contacto" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavComponent
