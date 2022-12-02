import React, { useEffect,useState } from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, BarraNombreArchivo, ProfileTextSlider } from '../../../routeIndex';
import { useLocation, useNavigate } from 'react-router-dom';
import './pantallaPerfil.css'
import { IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
const PantallaPerfil = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    // console.log(state.clusterInfo);
    // console.log(state.churns);
    // console.log(state.dataCluster);
    // console.log(state.index);
    // console.log(state.fileName);


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
                        activeBtn={state.currentClusterIndexFinal}

                    >

                    </BarraLateral>

                    {/* section for general content */}
                    <div className='contendor-general-tarjeta'>
                        <div className='tarjeta-maestra'>
                            <div className='card-back'>
                            
                                <div className='boton-back'>
                                    <IconButton
                                        colorScheme='red'
                                        aria-label='Call Segun'
                                        size='lg'
                                        icon={<CloseIcon />}
                                        onClick={() => navigate(-1)}/>
                                 </div>

                            </div>
                            

                            {/* we can add components here.... */}


                            <ProfileTextSlider
                                clusterNames={state.clusterInfo}
                                porcentajes={state.churns}
                                clusterNo={state.currentClusterIndexFinal}
                            >
                                
                            </ProfileTextSlider>


                        </div>
                    </div>
                </div>
            </TarjetaMaestra>
        </>
    )
}

export default PantallaPerfil;

