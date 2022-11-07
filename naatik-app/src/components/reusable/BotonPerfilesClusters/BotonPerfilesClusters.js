import React from 'react'
import { AiOutlineProfile } from "react-icons/ai";
import './BotonPerfilesClusters.css'

const BotonPerfilesClusters = ({btnType, type, content =""}) => {
  return (
    <>
        {
            btnType===1?
            (
                <button className='boton-general-encabezado'>
                    <div className='contenedor-interno-botones'>
                        <p> {type===1?"Clusters":"Perfiles"} </p>
                        <AiOutlineProfile></AiOutlineProfile>
                    </div>
                </button>
            ):
            (
                <button className='boton-general-normal'>
                    <div className='contenedor-interno-botones'>
                        <p> {content} </p>
                    </div>
                </button>
            )
        }
        
    </>
  )
}

export default BotonPerfilesClusters;