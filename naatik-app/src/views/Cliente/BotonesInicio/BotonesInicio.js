import React from 'react'
import { BotonInicio } from '../../../routeIndex.js'
import { useNavigate } from 'react-router-dom';
import './BotonesInicio.css'



const BotonesInicio = () => {

    // we use this hook in order to navigate throught views
    const navigate = useNavigate();

    // funcition to change directory in the app.
    const goToUpload = () => {
        navigate('/upload_files');
    }

    return (
        <>
            <div className='contenedor-botones-general'>
                <div className='contenedor-botones'>
                    <div className='contenedor-izq'>

                        <BotonInicio title={"Subir Archivo CSV"} type={"upload"} onClick={goToUpload} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BotonesInicio;