import React, { Component } from 'react'
import './StyleBoxComponent.css'
import {Link} from "react-router-dom"
import ButtonGeneral from '../../Components/Button/Button'

class BoxComponent extends Component {
  render() {
    return (
      <div className="mainBoxContainer">
        {this.props.datas.map((data, index) => {
          return (
            <div
              className={`caseBox ${index % 2 === 0 ? '' : 'caseBoxReverse'}`}
              key={index}
            >
              <img
                className="img"
                src={data.imagenUrl}
                alt="imagen del evento"
              />

              <div className="textBox">
                <h4 className="dateNumberBox">{data.dia}</h4>
                <small className="dateTextBox">{data.mes}</small>
                <p className="infoBox">{data.descripcion}</p>

                <Link to='/user/contactme' className='link'><ButtonGeneral type="button" nameBtn="Información" /></Link>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BoxComponent
