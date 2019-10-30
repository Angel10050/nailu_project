import React from 'react'
import './App.css'
import { animateScroll as scroll } from 'react-scroll'
import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/hands-1751637_1280.jpg'
import ButtonGeneral from './Components/Button/Button'
import NavComponent from './Components/navComponent/NavComponent'
import Footer from './Components/Footer/Footer'

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
        <NavComponent toScrollup={this.toScrollup} />
        <Hero heroMainImage={heroImage} />
        <div>
          <ButtonGeneral
            type="button"
            nameBtn="Inscribete"
            callback={this.handlerClick}
          />
          <ButtonGeneral
            type="button"
            nameBtn="Mas informacion"
            callback={this.handlerClick}
          />
          <ButtonGeneral
            type="button"
            nameBtn="Agendar"
            callback={this.handlerClick}
          />
          <ButtonGeneral
            type="button"
            nameBtn="Agendar cualquier cosa"
            callback={this.handlerClick}
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
