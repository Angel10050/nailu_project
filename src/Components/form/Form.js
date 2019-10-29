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

            <label htmlFor='name' className='label'>Name:</label>
            <input type='text' value={this.state.name} id='name' name='userName' onChange={this.handleOnChange} placeholder='Enter Your FullName' className='input'/>

            <label htmlFor='email' className='label'>E-mail:</label>
            <input type='text' value={this.state.email} id='email' name='userEmail' onChange={this.handleOnChange} placeholder='Enter Your E-mail' className='input'/>

            <label htmlFor='tlfNumber' className='label'>Phone Number:</label>
            <input type='tel' value={this.state.tlfNumber} id='tlfNumber' name='userTlfNumber' onChange={this.handleOnChange} placeholder='Enter Your Phone Number' className='input'/>

            <Button type='submit' nameBtn='Submit'/>

            </form>   

        </div>
     )
    }
}

export default Form