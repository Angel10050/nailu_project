import React from 'react'
import './NavComponentStyle.css'
import {Link} from 'react-router-dom'

import { Nav, Navbar } from 'react-bootstrap'

import Logo from '../logo/Logo'
import NavButton from '../navButtonComponent/navbutton'

const NavComponent = props => {
  return (
    <div className="container-fluid fluidNav">
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
           <Link to="/" ><NavButton link="#inicio" name="Inicio" /></Link> 
           <Link to=""> <NavButton link="#reservas" name="Reservas" /></Link>
           <Link to="/ /#gallery"><NavButton link="#galeria" name="Galeria" /></Link> 
           <Link to="/user/contactme"><NavButton link="#contacto" name="Contacto" /></Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavComponent
