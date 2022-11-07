import React from 'react'
import './BotonSubir.css'
const BotonSubir = ({onClick}) => {
  return (
    <>
        <button className='btn-subir' id='btn-subir' onClick={onClick}>
            <p> Subir </p>
        </button>
    </>
  )
}

export default BotonSubir;