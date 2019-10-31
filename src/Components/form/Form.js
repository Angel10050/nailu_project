import React,{ Component } from "react"
import './form.css'
import Button from '../Button/Button'

class Form extends Component {

    state={
        name : '',
        email : '',
        tlfNumber : '',
    }

    handleSubmit = (event) => {
       event.preventDefault()
       const InfoToJson = JSON.stringify(this.state)
       JSON.parse(InfoToJson)
    } 

    handleOnChange = (event) => {
        const {id, value} = event.target
        this.setState({
            [id] : value
        })
    }
    render () {
        
        return(
        <div className='formContainer'>

            <form onSubmit={this.handleSubmit} className='form'>

            <label htmlFor='name' className='label'>Nombre:</label>
            <input type='text' value={this.state.name} id='name' name='userName' onChange={this.handleOnChange} placeholder='Ingresa tu nombre completo' className='input'/>

            <label htmlFor='email' className='label'>Correo:</label>
            <input type='text' value={this.state.email} id='email' name='userEmail' onChange={this.handleOnChange} placeholder='ejemplo@ejemplo.com' className='input'/>

            <label htmlFor='tlfNumber' className='label'>Numero De Telefono:</label>
            <input type='tel' value={this.state.tlfNumber} id='tlfNumber' name='userTlfNumber' onChange={this.handleOnChange} placeholder='Ingresa tu numero telefonico' className='input'/>

            <Button type='submit' nameBtn='Submit'/>

            </form>   

        </div>
     )
    }
}

export default Form