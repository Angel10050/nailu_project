import React, { Component } from 'react'
import './StyleBoxComponent.css'
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
                src={training.image}
                alt="imagen del evento"
              />

              <div className="textBox">
                <h4 className="dateNumberBox">{training.day}</h4>
                  <small className="dateTextBox">{training.month}</small>
                      <div className='textMainConteiner'>
                          <p className="infoBox">{training.description}</p>
                      </div>
                <ButtonGeneral type="button" nameBtn="Información" />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BoxComponent