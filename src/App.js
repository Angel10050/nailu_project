import React from "react";
import './App.css';
import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/hands-1751637_1280.jpg'
import ButtonGeneral from './components/Button/Button'
import NavComponent from './Components/navComponent/nav_component'

class App extends React.Component {
  componentDidMount() {
    fetch("/api/data")
      .then(response => response.json())
      .then(console.log);
  }

  render() {
    return (
      <>
      <NavComponent/>
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
