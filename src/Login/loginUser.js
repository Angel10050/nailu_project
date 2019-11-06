import React from 'react'

import '../Login/styleLogin.css'

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="login-wrap">
          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label for="inputEmail3" className="col-sm-3 control-label">
                Usuario
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  id="inputUser"
                  placeholder="NombreUsuario"
                  required
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label for="inputPassword3" className="col-sm-3 control-label">
                Contaseña
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="inputPsw"
                  placeholder="Contraseña"
                  required
                ></input>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-9">
                <div className="checkbox">
                  <label>
                    <input type="checkbox"></input>
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group last">
              <div className="col-sm-offset-3 col-sm-9">
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

export default Login
