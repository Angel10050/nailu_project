import React from 'react';
import './App.css';

import { animateScroll as scroll } from 'react-scroll'

import NavComponent from './Components/navComponent/NavComponent'

class App extends React.Component {
  componentDidMount() {
    fetch('/api/data')
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
      </>
    );
  }
}

export default App;
