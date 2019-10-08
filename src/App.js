import React from 'react';
import './App.css';
import Hero from './components/heroComponent/Hero'
import heroImage from './components/heroComponent/heroMainImage.jpg'

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
