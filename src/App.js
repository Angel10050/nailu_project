import React from 'react';
import './App.css';
import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/hands-1751637_1280.jpg'

class App extends React.Component {
  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(console.log)
  }
  render() {
    return (
      <Hero heroMainImage={heroImage}/>
    );
  }
}

export default App;
