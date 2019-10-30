import React from 'react'

import '../Login/styleLogin.css'

function Login() {
  return (
    <div className="container login">
      <div className="row">
        <div className="login-wrap">
          <form className="form-horizontal" role="form">
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
                  className="form-control inputLogin"
                  id="inputUser"
                  placeholder="NombreUsuario"
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
                  className="form-control inputLogin"
                  id="inputPsw"
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
