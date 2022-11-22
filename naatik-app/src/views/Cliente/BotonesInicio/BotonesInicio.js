import React from 'react'
import { BotonInicio } from '../../../routeIndex.js'
import {useNavigate} from 'react-router-dom';
import './BotonesInicio.css'

const BotonesInicio = () => {

    const navigate = useNavigate();

    const goToUpload = () => {
        navigate('/upload_files');
    }

    const goToRecents = () => {
        navigate('/home');
    }


  return (
    <>
        <div className='contenedor-botones-general'>
            <div className='contenedor-botones'>
                <div className='contenedor-izq'>

                    <BotonInicio title={"Subir Archivo"} type={"upload"} onClick={ goToUpload }/>

                </div>

                <div className='contenedor-der'>

                    <BotonInicio title={"Ver usados anteriormente"} type={"charge"} onClick={ goToRecents }/>
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default BotonesInicio;