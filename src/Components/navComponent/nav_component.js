import React, { Component } from "react";
import Logo from "../logo/Logo";
import "./navComponentSyle.css";
import { Nav, Navbar } from "react-bootstrap";
import NavComponent from "../navButtonComponent/navbutton";
import { animateScroll as scroll } from "react-scroll";

class nav extends Component {
  handlerClick = () => {};
  toScrollup = () => {
    scroll.scrollToTop()
}

  functionProbe = name => {
    console.log(name);
    window.location = "http://www.google.es";
  };

  handleClickButtonNav = ({ target: { name } }) => {
    switch (name) {
      case "Inicio":
        this.functionProbe();
        break;
      case "Reservas":
        this.functionProbe();
        break;
      case "Galeria":
        this.functionProbe();
        break;
      case "Contacto":
        this.functionProbe();
        break;
      default:
        this.functionProbe();
        break;
    }
  };

  render() {
    return (
      <Navbar
        className="component--flex"
        collapseOnSelect
        sticky="top"
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand className="component--flex--logo" href="#home">
          <Logo onClick={this.toScrollup} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse sticky="top" id="responsive-navbar-nav">
          <Nav className="component--flex--button mr-auto">
            <NavComponent callback={this.handleClickButtonNav} name="Inicio" />
            <NavComponent
              callback={this.handleClickButtonNav}
              name="Reservas"
            />
            <NavComponent callback={this.handleClickButtonNav} name="Galeria" />
            <NavComponent
              callback={this.handleClickButtonNav}
              name="Contacto"
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default nav;
