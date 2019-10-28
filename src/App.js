import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Boxcomponentimg from './components/boxComponentImg/BoxComponentImg'
class App extends React.Component {


  state = {

    datos: [{
      "imagenUrl": "http://lorempixel.com/300/200",
      "dia": "25",
      "mes": "octubre",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose."
    },
    {
      "imagenUrl": "http://lorempixel.com/300/200",
      "dia": "31",
      "mes": "octubre",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose."
    }
    ]
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <Boxcomponentimg datos={this.state.datos} />
        </div>
      </div>
    );
  }
}

export default App;
