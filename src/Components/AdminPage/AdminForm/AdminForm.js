import React, { Component } from 'react'
import '../AdminForm/adminFormStyle.css'
import Button from '../../Button/Button'
import { withRouter } from 'react-router'
import './spinner.css'

class AdminForm extends Component {
  state = {
    error: null,
    isloading: false,
    eventData: {
      date: '',
      description: '',
      image: ''
    }
  }

  componentDidMount() {
    fetch('api/autorizacion', {method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(response => {
    if(response.ok === false){localStorage.removeItem('token'); this.props.history.push('/admin')}
  })
  .catch(err => console.log(err))
  
  const token = localStorage.getItem('token')
    if (!token) {
      this.props.history.push('/admin')
    }
  }

  handleSubmit = event => {
    this.setState({ isloading: true });
    event.preventDefault()
    fetch('/api/training', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: this.formData()
    })
      .then(response => {
        this.setState({ isloading: false }) 
        this.handleErros(response.ok)
        return response.json()
      })
      .catch((err)=>{console.log(err); this.setState({ isloading: false })})
  }

  handleErros = validation => {
    if (validation) {
      this.setState({ error: !validation })
    } else {
      this.setState({ error: true })
    }
  }

  formData = () => {
    const value = new FormData()
    value.append('image', this.state.eventData.image)
    value.append('date', this.state.eventData.date)
    value.append('description', this.state.eventData.description)
    return value
  }

  handleChange = event => {
    const { name, value, files } = event.target
    this.setState(prevState => ({
      eventData: {
        ...prevState.eventData,
        [name]: name === 'image' ? files[0] : value
      }
    }))
  }

  render() {
    const {isloading} = this.state;
    return (
      <>
        <div className="formContainerMain">
          <form
            className="adminForm"
            onSubmit={this.handleSubmit}
            method="post"
          >
            <div className="formEventDate">
              <div>
                <label htmlFor="date" className="adminLabel" type="date">
                  Fecha del evento:
                </label>
                <input
                  value={this.state.eventData.date}
                  type="date"
                  name="date"
                  id="date"
                  className="adminInput inputDate"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="formEventContent">
              <label htmlFor="description" className="adminLabel">
                Describre el evento (Se breve):
              </label>
              <textarea
                value={this.state.eventData.description}
                name="description"
                id="description"
                className="adminInput textarea"
                onChange={this.handleChange}
              />

              <label htmlFor="eventImage" className="adminLabel labelButton">
                Elige una imagen:
              </label>
              <input
                type="file"
                accept="image/*"
                name="image"
                id="image"
                className="adminInput"
                onChange={this.handleChange}
              />
            </div>

            {isloading ?
            <div className = 'tAlignCenter'>
              <i className="spinner spinnerSteps icon-spinner fa  fa-spinner fa-5x" aria-hidden="true"/>
            </div> : <Button
              type={'submit'}
              nameBtn={'Confirmar'}
              className="adminButtonForm"
            /> }
            
            {this.state.error ? (
              <p className="errorMensage">
                Error en los datos intentalo nuevamente
              </p>
            ) : this.state.error === false ? (
              <p className="errorMensage">Envio exitoso</p>
            ) : (
              ''
            )}
          </form>
        </div>
      </>
    )
  }
}

export default withRouter(AdminForm)
