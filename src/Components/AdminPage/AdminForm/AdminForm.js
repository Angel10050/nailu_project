import React, {Component} from 'react'
import '../AdminForm/adminFormStyle.css'

import {Form, FormGroup , FormControl, AlertDismissable, Glyphicon} from 'react-bootstrap'
import {FieldGroup} from 'react-bootstrap'


class AdminForm extends Component{
    state={
            day : '',
            month : '',
            description : '', 
            eventImage : ''
        }

    handleSubmit = (event) => {
        event.preventDefault()
     } 

    handleChange = (event) => {
        const {id, value} = event.target
         this.setState({
                [id] : value
         })
    }
    render(){
        console.log(this.state.eventImage)
        return(
            <>
                <form className='adminForm' onSubmit={this.handleSubmit} method='post'>

                    <div className='formEventDate'>
                        <div>
                            <label htmlFor='day' className='adminLabel'>Dia del evento:</label>
                            <input value={this.state.day} type='number' name='day' id='day' className='adminInput inputDay' onChange={this.handleChange} />
                        </div>

                        <div>
                            <label htmlFor='month' className='adminLabel'>Mes del evento:</label>
                            <input value={this.state.month} type='text' list='months' name='month' id='month' className='adminInput' onChange={this.handleChange} />
                                <datalist id='months'>
                                    <option value='Enero' />
                                    <option value='Frebrero' />
                                    <option value='Marzo' />
                                    <option value='Abril' />
                                    <option value='Mayo' />
                                    <option value='Junio' />
                                    <option value='Julio' />
                                    <option value='Agosto' />
                                    <option value='Septiembre' />
                                    <option value='Octubre' />
                                    <option value='Noviembre' />
                                    <option value='Diciembre' />
                                </datalist>
                        </div>
                    </div>

                    <div className='formEventContent'>
                        
                            <label htmlFor='description' className='adminLabel'>Describre el evento (Se breve):</label>
                            <textarea value={this.state.description} name='description' id='description' className='adminInput textarea' onChange={this.handleChange}/>

                            <p>Carga una imagen para este evento</p>
                            <label htmlFor='eventImage' className='adminLabel labelButton'>Selecciona una imagen:</label> 
                            <input value={this.state.eventImage} type='file' name='eventImage' id='eventImage' className='adminInput' onChange={this.handleChange} />
                            <p>{this.state.eventImage}</p>
              
                    </div>




                </form> 
            </>
        )
    }
}

export default AdminForm