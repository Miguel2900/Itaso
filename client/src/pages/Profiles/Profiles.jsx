import React from 'react'
import { Link } from "react-router-dom";
import "./Profiles.scss"
import adultos from "../Profiles/adultos.jpg"
import jovenes from "../Profiles/jovenes.jpg"
import ninos from "../Profiles/ninos.jpg"

const Profiles = () => {
  return (
    <div className='profiles'>
      <div className="sect-name">
        <h1 className="primary-title">Perfiles</h1>
      </div>

      <div className="row container">
        <img src={ninos} alt="" className="grid-image grid-item"/>
        <Link className="btn-profile grid-item">Niños</Link>
        <img src={jovenes} alt="" className="grid-image grid-item"/>
        <Link className="btn-profile grid-item">Jóvenes</Link>
        <img src={adultos} alt="" className="grid-image grid-item"/>
        <Link className="btn-profile grid-item">Adultos</Link>
      </div>
    </div>
  )
}

export default Profiles