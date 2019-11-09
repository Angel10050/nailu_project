import React, {Component} from 'react'
import '../AdminForm/adminFormStyle.css'
import Button from '../../Button/Button'
import { withRouter } from "react-router"

class AdminForm extends Component{
    state={
        error : null,
        eventData : {
            day : '',
            month : '',
            description : '', 
            image : ''
        }
}

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (!token) {
            this.props.history.push('/admin')
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('day', this.state.eventData.day)
        formData.append('month', this.state.eventData.month)
        formData.append('description', this.state.eventData.description)
        formData.append('image', this.state.eventData.image)
        fetch('http://localhost:8080/api/training',{
            method : 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body : formData
        })
        .then(response => response.json())
        .then(() => this.setState({error : false}))
        .catch(() => this.setState({error : true}))
     }

    handleChange = (event) => {
        const {name, value, files } = event.target
         this.setState(prevState => ({
             eventData : {
                ...prevState.eventData,
                    [name]: name === 'image' ? files[0] : value
                }
            })
         )      
    }
    render(){
        return(
            <>
                <div className='formContainerMain'>
                    <form className='adminForm' onSubmit={this.handleSubmit} method='post'>

                        <div className='formEventDate'>
                            <div>
                                <label htmlFor='day' className='adminLabel'>Dia del evento:</label>
                                <input value={this.state.eventData.day} type='number' name='day' id='day' className='adminInput inputDay' onChange={this.handleChange} />
                            </div>

                            <div>
                                <label htmlFor='month' className='adminLabel'>Mes del evento:</label>
                                <input value={this.state.eventData.month} type='text' list='months' name='month' id='month' className='adminInput' onChange={this.handleChange} />
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
                                <textarea value={this.state.eventData.description} name='description' id='description' className='adminInput textarea' onChange={this.handleChange}/>

                                <label htmlFor='image' className='adminLabel labelButton'>Elige una imagen:</label> 
                                <input type='file' name='image' id='image' className='adminInput' onChange={this.handleChange} />

                        </div>

                        <Button type={'submit'} nameBtn={'Confirmar'} className='adminButtonForm'/>    

                    </form> 
                  {
                    this.state.error ? <p className='errorMensage'>Error en los datos intentalo nuevamente</p> :
                    this.state.error === false ? <p className='errorMensage'>Envio exitoso</p> : '' 
                  }  
                </div>   
            </>
        )
    }
}

export default withRouter(AdminForm)