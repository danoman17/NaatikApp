import React from 'react'
import { ListaDesplegable, BoxChurns } from '../../../routeIndex';
import './BarraLateral.css'
const BarraLateral = ({Bajo, Medio, Alto}) => {
  return (
    <>
        <div className='contenedor-general-barra-lateral'>
            
            <ListaDesplegable></ListaDesplegable>
            <BoxChurns BajoEnd={Bajo} MedEnd={Medio} AltoEnd={Alto} ></BoxChurns>

        </div>
    </>
  )
}

export default BarraLateral;