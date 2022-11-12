import React from 'react'
import './BotonSubir.css'
const BotonSubir = ({onClick, TextBtn}) => {
  return (
    <>
        <button className='btn-subir' id='btn-subir' onClick={onClick}>
            <p> {TextBtn} </p>
        </button>
    </>
  )
}

export default BotonSubir;