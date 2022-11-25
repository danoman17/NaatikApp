import React from 'react'
import { ListaDesplegable, BoxChurns } from '../../../routeIndex';
import './BarraLateral.css'


const BarraLateral = ({Bajo, Medio, Alto, arrayInfo, clickBtn}) => {
  return (
    <>
        <div className='contenedor-general-barra-lateral'>
            
            <ListaDesplegable arrContenido={arrayInfo} funcion={clickBtn}></ListaDesplegable>
            <BoxChurns BajoEnd={Bajo} MedEnd={Medio} AltoEnd={Alto} ></BoxChurns>

        </div>
    </>
  )
}

export default BarraLateral;