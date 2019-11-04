import React, { Component } from 'react'
import './SSSS.css'
import ButtonGeneral from '../../Components/Button/Button'

class BoxComponent extends Component {
  render() {
    return (
      <div className="mainBoxContainer">
        {this.props.datas.map((data, index) => {
          return (
            <div
              className={`caseBox ${
                index % 2 === 0 ? '' : 'caseBoxReverse'
              }`}
            >
           
                <img
                  className="img"
                  src={data.imagenUrl}
                  alt="imagen del evento"
                />
            
              <div className="textBox">
                <h4 className="dateNumberBox">{data.dia}</h4>
                <small class="dateTextBox">{data.mes}</small>
                <p className="infoBox">{data.descripcion}</p>

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
