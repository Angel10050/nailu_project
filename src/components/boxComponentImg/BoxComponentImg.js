import React, { Component } from 'react';
import './BoxComponent.css'
class Boxcomponentimg extends Component {
    render() {
        return (
            < React.Fragment >
                {this.props.datos.map((dato, index) => {
                    return (
                        <div className="row ContainerBox">
                            <div className="col">
                                <img className="img-fluid  mb-3 mb-md-0 Img" src={dato.imagenUrl} alt="imagen del evento" />
                            </div>
                            <div className="col Text">
                                <h4 className="DateNumber">{dato.dia}</h4>
                                <small class="text-muted DateText">{dato.mes}</small>
                                <p className="font-weight-normal Info">{dato.descripcion}</p>
                                <button type="button" className="btn btn-primary center Btn">Reserva</button>
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