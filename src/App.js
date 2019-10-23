import React from "react";
import ButtonGeneral from "./components/Button/Button";
import "./App.css";
import React from 'react';
import Logo from './Components/logo/Logo'
import './App.css';
import { animateScroll as scroll } from 'react-scroll'

class App extends React.Component {
  componentDidMount() {
    fetch("/api/data")
      .then(response => response.json())
      .then(console.log);
  }

  handlerClick = () => {};
  toScrollup = () => {
    scroll.scrollToTop()
}

  render() {
    return (
      <>
      <Logo onClick={this.toScrollup}/>
      <div>
        <ButtonGeneral nameBtn="Inscribete" callback={this.handlerClick} />
        <ButtonGeneral nameBtn="Mas informacion" callback={this.handlerClick} />
        <ButtonGeneral nameBtn="Agendar" callback={this.handlerClick} />
        <ButtonGeneral nameBtn="Agendar tebgrvfacdsfg" callback={this.handlerClick}/>
      </div>
      </>
    );
  }
}

export default App;
