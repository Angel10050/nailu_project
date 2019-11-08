import React, { Component } from 'react'
import './form.css'
import Button from '../Button/Button'
import NavComponent from '../navComponent/NavComponent'

class Form extends Component {
  state = {
    error : null,
      customer :{
          name: '',
          email: '',
          phone: ''
      }
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('/api/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.customer)
    })
      .then(response => this.handleErros(response.ok))
      .catch((error) => alert(error.message))
  }

  handleErros = (validation) => {
      if(validation){
        this.setState({error : false})
      }else{
        this.setState({error : true})
      }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState(prevStete => ({
      customer : {
        ...prevStete.customer,
          [name] : value
      }
    }))
  }
  render() {
    return (


      <div className="formContainer">
        <NavComponent />
          <div className='mainFormCustomer'>

          <form onSubmit={this.handleSubmit} className="form">
              <h5>Déjanos tu Datos para contactarte</h5>

              <label htmlFor="name" className="label">
                Nombre:
              </label>
              <input
                type="text"
                value={this.state.name}
                id="name"
                name="name"
                onChange={this.handleOnChange}
                placeholder="Ingresa tu nombre completo"
                className="input"
              />

              <label htmlFor="email" className="label">
                Correo:
              </label>
              <input
                type="email"
                value={this.state.email}
                id="email"
                name="email"
                onChange={this.handleOnChange}
                placeholder="ejemplo@ejemplo.com"
                className="input"
              />

              <label htmlFor="tlfNumber" className="label">
                Numero De Telefono:
              </label>
              <input
                type="tel"
                value={this.state.phone}
                id="phone"
                name="phone"
                onChange={this.handleOnChange}
                placeholder="Ingresa tu numero telefonico"
                className="input"
              />

              <Button type="submit" nameBtn="Enviar" />
            </form>
            {
              this.state.error ? <p className='errorMensage'>Error en los datos intentalo nuevamente</p> :
               this.state.error === false ? <p className='errorMensage'>Envio exitoso, Gracias</p> : '' 
            } 

          </div>
      </div>
    )
  }
}

export default Form
