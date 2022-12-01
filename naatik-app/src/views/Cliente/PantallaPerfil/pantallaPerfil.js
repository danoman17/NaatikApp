import React, { useState } from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, BarraNombreArchivo, ProfileTextSlider } from '../../../routeIndex';
import { useLocation } from 'react-router-dom';
import './pantallaPerfil.css'

const PantallaPerfil = () => {

    const { state } = useLocation();


    const index = 0;
    const keys = {
        0: ["Normal", "normal"],
        1: ["Baja", "bajo"],
        2: ["Media", "medio"],
        3: ["Alta", "alto"]
    }

    const keysPercentages = {
        0: [0, state.churns[0] * 100],
        1: [state.churns[0] * 100, state.churns[1] * 100],
        2: [state.churns[1] * 100, state.churns[2] * 100],
        3: [state.churns[2] * 100, 100]
    }

    return (
        <>

            {/* Navbar section */}
            <Navbar>  </Navbar>

            {/* name of the current file section */}
            <BarraNombreArchivo
                fileName={state.fileName}
            >
            </BarraNombreArchivo>
            {/* general container for the spacework */}
            <TarjetaMaestra>

                {/* general container for the spacework */}
                <div className='contenedor-general-panel'>

                    {/* lateral navbar section */}
                    <BarraLateral
                        Bajo={(state.churns[0] * 100).toFixed(0)}
                        Medio={(state.churns[1] * 100).toFixed(0)}
                        Alto={(state.churns[2] * 100).toFixed(0)}
                        arrayInfo={state.clusterInfo}

                    >

                    </BarraLateral>

                    {/* section for general content */}
                    <div className='contendor-general-tarjeta'>
                        <div className='tarjeta-maestra'>

                            {/* we can add components here.... */}


                            <ProfileTextSlider>

                            </ProfileTextSlider>


                        </div>
                    </div>
                </div>
            </TarjetaMaestra>
        </>
    )
}

export default PantallaPerfil;

