import React from 'react'
import { Link } from "react-router-dom";
import "./Ers.scss"
import rally1 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-163 (1).jpg"
import rally2 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-64.jpg"
import rally3 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-93.jpg"

const Ers = () => {
  return (
    <div className='ers'>
      <div className="sect-name">
        <h1 className="primary-title">Eventos, reuniones y sesiones</h1>
       </div>

      <div className="row container">
        <img src={rally1} alt="" className="grid-image grid-item"/>
        <Link className="btn-profile grid-item">Ver evento</Link>
        <img src={rally2} alt="" className="grid-image grid-item"/>
        <Link className="btn-profile grid-item">Ver evento</Link>
        <img src={rally3} alt="" className="grid-image grid-item"/>
        <Link className="btn-profile grid-item">Ver evento</Link>
      </div>
    </div>
  )
}

export default Ers