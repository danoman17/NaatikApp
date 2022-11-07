import React from 'react'
import './TarjetaMaestra.css'
const TarjetaMaestra = ({children}) => {
  return (
    <>
        <div className='tarjeta-maestra-contenedor'>
            {children}
        </div>
    </>
  )
}

export default TarjetaMaestra;