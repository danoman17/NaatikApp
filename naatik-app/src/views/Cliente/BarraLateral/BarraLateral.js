import React from 'react'
import { AiFillFolder } from "react-icons/ai";
import { ListaDesplegable, BoxChurns } from '../../../routeIndex';
import './BarraLateral.css'
const BarraLateral = () => {
  return (
    <>
        <div className='contenedor-general-barra-lateral'>
            

            <div className='text-container'>
                <AiFillFolder/>
                <p> /PATH A CSV/csv.csv </p>
            </div>
            <ListaDesplegable></ListaDesplegable>
            <BoxChurns></BoxChurns>

        </div>
    </>
  )
}

export default BarraLateral;