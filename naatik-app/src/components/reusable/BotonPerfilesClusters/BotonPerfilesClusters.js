import React from 'react'
import { AiOutlineProfile } from "react-icons/ai";
import './BotonPerfilesClusters.css'

const BotonPerfilesClusters = ({btnType, type, idBtn, content="", evento}) => {

    // función con la que establecemos el estado de la variable currentCluster en la view pantallaDividida
    // es importante esta funcion ya que nos ayuda a iterar la informacion entre cada cluster/grupo.
    const handleClick = (e) => {
        e.preventDefault();
        evento(idBtn);
    }

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
                <button className='boton-general-normal' key={idBtn} onClick={handleClick}>
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