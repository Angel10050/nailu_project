import React from 'react';
import Button from './components/Button'
import './App.css';


class App extends React.Component {
  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(console.log)
  }

  handlerClick = () => {
    console.log('esto es un click');
    
  }

  render() {
    return (
      <div className="App">
        <Button nameBtn='Inscribete' callback={this.handlerClick}/>
        <Button nameBtn='Mas informacion' callback={this.handlerClick}/>
        <Button nameBtn='Agendar' callback={this.handlerClick}/>
        <Button nameBtn='Agendar tebgrvfacdsfg' callback={this.handlerClick}/>
      </div>
    );
  }
}

export default App;
