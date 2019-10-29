import React from 'react';
import Form from './Components/form/Form'
import './App.css';


class App extends React.Component {

  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return (
      <Form />
    );
  }
}

export default App;
