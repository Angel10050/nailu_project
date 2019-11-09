import React, { Component } from 'react'

import '../Login/styleLogin.css'
import Logo from '../../logo/Logo'
import { Form } from 'react-bootstrap'

class Login extends Component {
  state = {
    error: null,
      login: {
        username: '',
        password: ''
      }
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
         body: JSON.stringify(this.state.login)
    }) 
    .then(response => {
      this.handleErros(response.ok)
       return response.json()
    })
    .then(console.log)
    .catch(error => alert(error.message))
  }

  handleErros = (validation) => {
    if(validation){
      this.setState({error : false})
    }else{
      this.setState({error : true})
    }
}

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState(prevState => ({
      login: {
        ...prevState.login,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <>
        <div className="container login containerLogin">
          <header className="adminHeader">
            <Logo />
          </header>
          <div className="row loginRow">
            <div className="login-wrap">
              <Form
                onSubmit={this.handleSubmit}
                className="form-horizontal"
                role="form"
              >
                <div className="form-group">
                  <label className="col-sm-3 control-label textLogin">
                    Usuario
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-user loginI"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      value={this.state.login.username}
                      name="username"
                      onChange={this.handleOnChange}
                      placeholder="NombreUsuario"
                      className="form-control inputLogin"
                      required
                    ></input>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label textLogin">
                    Contaseña
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-unlock-alt"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control inputLogin"
                      value={this.state.login.password}
                      name="password"
                      onChange={this.handleOnChange}
                      placeholder="Contraseña"
                      required
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-3 col-sm-9">
                    <div className="checkbox"></div>
                  </div>
                </div>
                <div className="form-group last d-flex justify-content-center">
                  <div className="col-sm-offset-3 row-sm-5 ">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Ingresar
                    </button>
                  </div>
                </div>
              </Form>
            </div>
            {
              this.state.error ? <p className='errorMensage'>Error en los datos intentalo nuevamente</p> :
               this.state.error === false ? <p className='errorMensage'>Autenticacion exitosa</p> : '' 
            } 
          </div>
        </div>
      </>
    )
  }
}

export default Login
