import React, { Component } from 'react'

import '../Login/styleLogin.css'

class Login extends Component {
  state = {
    user: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleOnChange = event => {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }

  render() {
    return (
      <div className="container login">
        <div className="row loginRow">
          <div className="login-wrap">
            <form
              onSubmit={this.handleSubmit}
              className="form-horizontal"
              role="form"
            >
              <div className="form-group">
                <label
                  for="inputEmail3"
                  className="col-sm-3 control-label textLogin"
                >
                  Usuario
                </label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-user loginI"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    value={this.state.user}
                    name="userName"
                    id="user"
                    onChange={this.handleOnChange}
                    placeholder="NombreUsuario"
                    className="form-control inputLogin"
                    required
                  ></input>
                </div>
              </div>

              <div className="form-group">
                <label
                  for="inputPassword3"
                  className="col-sm-3 control-label textLogin"
                >
                  Contaseña
                </label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-unlock-alt"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    value={this.state.password}
                    id="passw"
                    onChange={this.handleOnChange}
                    placeholder="Contraseña"
                    className="form-control inputLogin"
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
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
