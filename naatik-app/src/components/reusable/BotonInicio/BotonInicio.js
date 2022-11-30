import React from 'react'
import { AiOutlineUpload, AiFillFolderOpen } from "react-icons/ai";
import './BotonInicio.css'


const BotonInicio = ({ title, type, onClick }) => {


    return (
        <>
            <button className='btn-contenedor-general' id='btn-contenedor-geberal' onClick={onClick}>
                <div className='section-up'>
                    {
                        (type === "upload") ? <AiOutlineUpload /> : <AiFillFolderOpen />
                    }
                </div>
                <div className='section-down'>
                    <p> {title} </p>
                </div>
            </button>
        </>
    )
}

export default BotonInicio