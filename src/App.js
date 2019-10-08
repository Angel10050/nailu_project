import React from 'react';
import Logo from './Components/logo/Logo'
import './App.css';
import { animateScroll as scroll } from 'react-scroll'
import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/heroMainImage.jpg'

class App extends React.Component {
  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(console.log)
  }

  toScrollup = () => {
    scroll.scrollToTop()
}

  render() {
    return (
      <>
      <Logo onClick={this.toScrollup}/>
      <Hero heroMainImage={heroImage}/>
      </>
    );
  }
}

export default App;
