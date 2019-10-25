import React, { Component } from 'react';
import './BoxComponent.css'
class Boxcomponentimg extends Component {

    render() {
        return (
            < React.Fragment >
                {
                    this.props.datos.map((dato, index) => {
                        return (
                            <div className="row containerBox">
                                <div className="col">
                                    <img className="img-fluid  mb-3 mb-md-0 imgCss" src={dato.imagenUrl} alt="imagen del evento" />
                                </div>
                                <div className="col textCss">
                                    <h4 className="dateNumberCss">{dato.dia}</h4>
                                    <small class="text-muted dateTextCss">{dato.mes}</small>
                                    <p className="font-weight-normal infoCss">{dato.descripcion}</p>
                                    <button type="button" className="btn btn-primary center Btncss">Reserva</button>
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment >
        )
    }
}

export default Boxcomponentimg;