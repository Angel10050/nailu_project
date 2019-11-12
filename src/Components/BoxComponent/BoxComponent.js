import React, { Component } from 'react'
import './StyleBoxComponent.css'
import Route from '../routeComponent/Route'

class BoxComponent extends Component {
  render() {
    return (
      <div className="mainBoxContainer" id="boxComponent">
        <h2 className="titles" id="titleBoxComponent">
          Próximos Eventos
        </h2>
        {this.props.trainings.map((training, index) => {
          return (
            <div
              className={`caseBox ${index % 2 === 0 ? '' : 'caseBoxReverse'}`}
              key={index}
            >
              <img
                className="img"
                src={training.image}
                alt="imagen del evento"
              />

              <div className="textBox">
                <h4 className="dateNumberBox">{training.day}</h4>
                <small className="dateTextBox">{training.month}</small>
                <div className="textMainConteiner">
                  <p className="infoBox">{training.description}</p>
                </div>

                <Route
                  to="/user/contactme"
                  className="link"
                  name="Información"
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BoxComponent
