import React from 'react'
import { AiOutlineFullscreenExit } from "react-icons/ai";
import './BoxChurns.css'

const BoxChurns = () => {
  return (
    <>
        <div className='contenedor-general-box'>
            <button className='btn-header-box'>
                <p>Porcentaje de Perfil</p>
                <AiOutlineFullscreenExit/>
            </button>

            <div className='contenedor-porcentajes'>
                <p className="porcentaje-baja"> 0% - ?%</p>
                <p className="porcentaje-media"> ?% - ?%</p>
                <p className="porcentaje-alta"> ?% - 100%</p>

            </div>
        </div>
    </>
  )
}

export default BoxChurns;