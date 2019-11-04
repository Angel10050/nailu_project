import React, { Component } from 'react'

import '../Login/styleLogin.css'
import { Form } from 'react-bootstrap'

class Login extends Component {
  state = {
    user: []
  }

  getInfo = () => {
    fetch('/api/login')
      .then(response => response.JSON())
      .then(data => {
        this.setState({ user: data })
      })
      .catch(error => {
        alert('Ha ocurrido un error', error)
      })
  }

  componentDidMount() {
    this.getInfo()
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="container login containerLogin">
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
                    value={this.state.user}
                    name="user"
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
                    value={this.state.password}
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
        </div>
      </div>
    )
  }
}

export default Login
