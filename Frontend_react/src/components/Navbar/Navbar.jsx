import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../Navbar/logo.png'
import "./Navbar.scss"

const Navbar = () => {
  const [clicked, setClick] = useState(false)
  return (
    <nav className="main-nav">

      <div className='img'>
        <Link className='nav-link' to="/">
          <img className='logo' src={logo} alt=""></img>
        </Link>
      </div>

 
      <ul id="nav-list" className={clicked ? "#nav-list active" : "#nav-list"}>
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            Perfiles
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ers">
            Eventos, reuniones y sesiones
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/games">
            Juegos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/news">
            Noticias
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/survey">
            Encuestas
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            Nosotros
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/forum">
            Foro
          </Link>
        </li>
      </ul>

      <div className="nav-items-right">
        <Link className="btn-login" to="/login">
          Login
        </Link>
        <Link className="btn-login" to="/register">
          Register
        </Link>
        <div className='mobile'>
          <i id='bars' className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={()=>setClick(!clicked)}></i>
        </div>
      </div>

    </nav>
  )
}

export default Navbar