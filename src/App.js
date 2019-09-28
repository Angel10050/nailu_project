import React from 'react';
import Button from './components/Button'
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
      </div>
    );
  }
}

export default App;
