import React from "react";
import ButtonGeneral from "./components/Button/Button";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    fetch("/api/data")
      .then(response => response.json())
      .then(console.log);
  }

  handlerClick = () => {};

  render() {
    return (
      <div className="App">
        <ButtonGeneral nameBtn="Inscribete" callback={this.handlerClick} />
        <ButtonGeneral nameBtn="Mas informacion" callback={this.handlerClick} />
        <ButtonGeneral nameBtn="Agendar" callback={this.handlerClick} />
        <ButtonGeneral nameBtn="Agendar tebgrvfacdsfg" callback={this.handlerClick}/>
      </div>
    );
  }
}

export default App;
