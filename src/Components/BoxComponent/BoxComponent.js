import React, { Component } from 'react'
import './StyleBoxComponent.css'
import Route from '../routeComponent/Route'
import ButtonGeneral from '../../Components/Button/Button'

class BoxComponent extends Component {
  render() {
    return (
      <div className="mainBoxContainer">
        {this.props.trainings.map((training, index) => {
          return (
            <div
              className={`caseBox ${index % 2 === 0 ? '' : 'caseBoxReverse'}`}
              key={index}
            >
              <img
                className="img"
                src={training.imagenUrl}
                alt="imagen del evento"
              />

              <div className="textBox">
                <h4 className="dateNumberBox">{training.day}</h4>
                <small className="dateTextBox">{training.month}</small>
                <p className="infoBox">{training.description}</p>

                <Route to='/user/contactme' className='link' button={<ButtonGeneral type="button" nameBtn="Información" />}/>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BoxComponent
