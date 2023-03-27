import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  return (
    <div >
    <div className="container">

    <div className="container mt-5 bg-primary rounded shadow w-75 mb-5">
      <div className="row align-items-stretch">
        <div className="col bg_img d-none d-lg-block col-md-5 col-lg-5 col-xl-6">
        </div>
        <div className="col bg-white rounded-end p-2">
          <div className="d-flex justify-content-end">
            <img src={logo} alt="Itaso" className="logo-img" />
          </div>
          <h2 className="text-center py-5 display-6">Iniciar Sesión</h2>
          <form action="#">
            <div className="mb-4">
              <div className="mb-4 form-floating mx-5">
                <input type="email" className="form-control" name="email" placeholder="Email" id="email" />
                <label for="floatingInputValue" >Email</label>
              </div>

              <div className="mb-4 form-floating mx-5">
                <input type="password" className="form-control" name="password" placeholder="Password" id="password" />
                <label for="password" className="form-label">Contraseña</label>
              </div>
              <span id="message"></span>
              <div className="d-grid justify-content-center align-content-center">
                <button type="submit" className="btn btn-dark mt-4" disabled id='submit'>
                  Iniciar Sesión
                </button>
              </div>
              <div className="my-3 text-center">
                <span>¿No tienes cuenta? <Link to="/register" className=" text-info fw-semibold" >Crea una</Link></span>
              </div>
 
            </div>
          </form>
        </div>
      </div>
    </div>

    </div>
    </div>
  );
};

export default Login;
