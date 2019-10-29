import React from 'react'
import ButtonGeneral from './Components/Button/Button'
import './App.css'

import { animateScroll as scroll } from 'react-scroll'

import Logo from './Components/logo/Logo'
import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/hands-1751637_1280.jpg'
import Footer from './Components/Footer/Footer'
import Login from './Login/loginUser'

class App extends React.Component {
  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(console.log)
  }

  handlerClick = () => {}
  toScrollup = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <>
        <Hero heroMainImage={heroImage} />
        <Logo onClick={this.toScrollup} />
        <div>
          <ButtonGeneral nameBtn="Inscribete" callback={this.handlerClick} />
          <ButtonGeneral
            nameBtn="Mas informacion"
            callback={this.handlerClick}
          />
          <ButtonGeneral nameBtn="Agendar" callback={this.handlerClick} />
          <ButtonGeneral
            nameBtn="Agendar cualquier cosa"
            callback={this.handlerClick}
          />
          <Login />
          <Footer />
        </div>
      </>
    )
  }
}

export default App
