import React from 'react';
import Logo from './Components/logo/Logo'
import './App.css';

class App extends React.Component {
  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(console.log)
  }
  render() {
    return (
      <div className="App">
        <Logo/>
      </div>
    );
  }
}

export default App;
