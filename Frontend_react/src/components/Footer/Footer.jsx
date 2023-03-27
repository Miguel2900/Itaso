import React from 'react'
import { Link } from "react-router-dom";
import logoFooter from '../Footer/logofooter.png'
import "./Footer.scss"


const Footer = () => {
  return (
    <div className=" main-footer">
      <div className='container mt-3 d-grid'>
      <div className="row">
        <div className="info-box">
          <h4 className="footer-title">Síguenos en redes sociales</h4>
          <div className="social-media">
            <Link className="sm-link">
                <i className="bx bxl-facebook-square"></i>
            </Link>
            <Link className="sm-link">
                <i className="bx bxl-instagram"></i>
            </Link>
            <Link className="sm-link">
                <i className="bx bxl-twitter"></i>
            </Link>
            <Link className="sm-link">
                <i className="bx bxl-youtube"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="remove-grid">
        <Link className="logo" to="/">
            <img src={logoFooter} alt=""></img>
        </Link>
        <Link className="btn-contact">
          Contacto
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Footer