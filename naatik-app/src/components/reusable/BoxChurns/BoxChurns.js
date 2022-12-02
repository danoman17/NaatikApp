import React from 'react'
import { AiOutlineFullscreenExit } from "react-icons/ai";
import './BoxChurns.css'

const BoxChurns = ({ BajoEnd, MedEnd, AltoEnd }) => {


    const handleClickDummie = (e) => {
        e.preventDefault();
    }
    
    return (
        <>
            <div className='contenedor-general-box'>
                <button className='btn-header-box' onClick={handleClickDummie}>
                    <p>Porcentajes Churn</p>
                    <AiOutlineFullscreenExit size={'20px'}/>
                </button>

                <div className='contenedor-porcentajes'>
                    <div className='contenedor-porcentaje'>
                        <div className='contenedor-porcentaje-izq'>
                            <p className='incial-contenedor-porcentaje-permanente'> P: </p>
                        </div>
                        <div className='contenedor-porcentaje-der'>
                            
                            <p className="porcentaje-normal">0% - {BajoEnd}%</p>
                        </div>
                    </div>

                    <div className='contenedor-porcentaje'>
                        <div className='contenedor-porcentaje-izq'>
                            <p className='incial-contenedor-porcentaje-bajo'> B: </p>
                        </div>
                        <div className='contenedor-porcentaje-der'>
                            
                            <p className="porcentaje-baja"> {BajoEnd} - {MedEnd}%</p>

                        </div>
                    </div>

                    <div className='contenedor-porcentaje'>
                        <div className='contenedor-porcentaje-izq'>
                            <p className='incial-contenedor-porcentaje-medio'> M: </p>
                        </div>
                        <div className='contenedor-porcentaje-der'>
                            <p className="porcentaje-media"> {MedEnd}% - {AltoEnd}%</p>
                        </div>
                    </div>

                    <div className='contenedor-porcentaje'>
                        <div className='contenedor-porcentaje-izq'>
                            <p className='incial-contenedor-porcentaje-alto'> A: </p>
                        </div>
                        <div className='contenedor-porcentaje-der'>
                            
                            <p className="porcentaje-alta"> {AltoEnd}% - 100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxChurns;