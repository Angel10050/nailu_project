import React from "react";
import './App.css';

import { animateScroll as scroll } from 'react-scroll'

import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/hands-1751637_1280.jpg'
import ButtonGeneral from './Components/Button/Button'
import NavComponent from './Components/navComponent/NavComponent'

class App extends React.Component {
  componentDidMount() {
    fetch("/api/data")
      .then(response => response.json())
      .then(console.log);
  }

  toScrollup = () => {
    scroll.scrollToTop()
  }

  handlerClick = () => {

  }

  render() {
    return (
      <>
      <NavComponent toScrollup={this.toScrollup} />
      <Hero heroMainImage={heroImage}/>
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
