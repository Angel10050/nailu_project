import React, { Component } from 'react'
import './StyleBoxComponent.css'
import ButtonGeneral from '../../Components/Button/Button'

class BoxComponent extends Component {
  render() {
    return (
      <div className="container-fluid fluid">
        {this.props.datas.map((data, index) => {
          return (
            <div
              className={`row container-box ${
                index % 2 === 0 ? '' : 'reverse'
              }`}
            >
              <div className="col">
                <img
                  className="img-fluid  mb-3 mb-md-0 imgBox"
                  src={data.imagenUrl}
                  alt="imagen del evento"
                />
              </div>
              <div className="col textBox">
                <h4 className="dateNumberBox">{data.dia}</h4>
                <small class="text-muted dateTextBox">{data.mes}</small>
                <p className="font-weight-normal infoBox">{data.descripcion}</p>
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
