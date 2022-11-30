import React from 'react';
import { AiFillFolder } from "react-icons/ai";
import './BarraNombreArchivo.css';
const BarraNombreArchivo = ({fileName="file.csv"}) => {
  return (
    <>
        <div className='contenedor-general-barraFileName'>
            <div className='contenedor-icono'>
                <AiFillFolder/>
                
            </div>
            <div className='contenedor-filename'>
                
                <p> {fileName} </p>
            </div>
        </div>
    </>
  )
}

export default BarraNombreArchivo;