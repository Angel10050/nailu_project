import React, { Component } from 'react'
import './form.css'
import Button from '../Button/Button'
import Logo from '../logo/Logo'
import Route from '../routeComponent/Route'

class Form extends Component {
  state = {
    error: null,
    customer: {
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
      .catch(() => alert('Error en el servidor'))
  }

  handleErros = validation => {
    if (validation) {
      this.setState({ error: !validation })
    } else {
      this.setState({ error: true })
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState(prevStete => ({
      customer: {
        ...prevStete.customer,
        [name]: value
      }
    }))
    this.setState({
      error: null
    })
  }
  render() {
    return (
      <>
        <header className="adminHeaderCustomer">
          <Logo />
          <Route to="/" className="volver" name="Volver" />
        </header>

        <div className="formContainer">
          <form onSubmit={this.handleSubmit} className="form">
            <h4>Déjanos tu Datos para contactarte</h4>

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
              Numero De Teléfono:
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

<<<<<<< HEAD
                    {
                    this.state.error ? <p className='errorMensage'>Error en los datos intentalo nuevamente</p> :
                    this.state.error === false ? <p className='errorMensage'>Envio exitoso, Gracias</p> : '' 
                  }

                  </form>
                 
          </div>
=======
            <Button type="submit" nameBtn="Enviar" />
          </form>
          {this.state.error ? (
            <p className="errorMensage">
              Error en los datos intentalo nuevamente
            </p>
          ) : this.state.error === false ? (
            <p className="errorMensage">
              pronto nos estaremos poniendo en contacto con usted, Gracias
            </p>
          ) : (
            ''
          )}
        </div>
>>>>>>> f2bae5b88be1909106b22ae0b3b59f735cd3cca1
      </>
    )
  }
}

export default Form
