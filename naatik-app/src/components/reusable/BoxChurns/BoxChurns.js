import React from 'react'
import { AiOutlineFullscreenExit } from "react-icons/ai";
import './BoxChurns.css'

const BoxChurns = ({BajoEnd, MedEnd, AltoEnd}) => {
  return (
    <>
        <div className='contenedor-general-box'>
            <button className='btn-header-box'>
                <p>Porcentajes Churn</p>
                <AiOutlineFullscreenExit/>
            </button>

            <div className='contenedor-porcentajes'>
                <p className="porcentaje-baja"> 0% - {BajoEnd}%</p>
                <p className="porcentaje-media"> {BajoEnd}% - {MedEnd}%</p>
                <p className="porcentaje-alta"> {AltoEnd}% - 100%</p>

            </div>
        </div>
    </>
  )
}

export default BoxChurns;