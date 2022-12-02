import React from 'react'
import { AiOutlineProfile } from "react-icons/ai";
import { toast } from 'react-toastify';
import './BotonPerfilesClusters.css'

const BotonPerfilesClusters = ({ btnType, type, idBtn, content = "", evento, isDoingSomthing = true, warning = "", isSelected }) => {

    // función con la que establecemos el estado de la variable currentCluster en la view pantallaDividida
    // es importante esta funcion ya que nos ayuda a iterar la informacion entre cada cluster/grupo.
    const handleClick = (e) => {
        e.preventDefault();
        evento(idBtn);
    }

    const handleClickWarning = (e) => {
        e.preventDefault();

        toast.info(warning, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        console.log("Warning: ",warning);
    }

    const handleDummieBtn = (e) => {
        e.preventDefault();
    }

    return (
        <>
            {
                (btnType === 1) ?
                    (
                        <button className='boton-general-encabezado' onClick={handleDummieBtn}>
                            <div className='contenedor-interno-botones'>
                                <p> {type === 1 ? "Clusters" : "Perfiles"} </p>
                                <AiOutlineProfile></AiOutlineProfile>
                            </div>
                        </button>
                    ) :
                    (
                        (isDoingSomthing) ?
                            (
                                (isSelected)?
                                (

                                    <button className='boton-general-normal-active' key={idBtn} onClick={handleClick}>
                                        <div className='contenedor-interno-botones-active'>
                                            <p> {content} </p>
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
                            ):
                            (
                                <button className='boton-general-normal-desabled' key={idBtn} onClick={handleClickWarning}>
                                    <div className='contenedor-interno-botones'>
                                        <p> {content} </p>
                                    </div>
                                </button>
                            )

                    )
            }
            {

            }

        </>
    )
}

export default BotonPerfilesClusters;