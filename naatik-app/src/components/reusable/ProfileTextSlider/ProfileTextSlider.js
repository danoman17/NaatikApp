import React, { useEffect, useState } from "react";
import { BotonSubir } from '../../../routeIndex';

import './ProfileTextSlider.css'
import {
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";


const ProfileTextSlider = () => {

    return (
        <>
            <Tabs
                p="3"
                variant="unstyled"
                rounded="md"
                bg="white"
                w="100%"
                h="100%"
                backgroundColor="#ffff"
            >
                <TabList
                    h="10%"
                    w="100%"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Tab
                        _selected={{ color: "white", bg: "#E34956", borderRadius: "10px 10px 0 0", height:"100%" }}
                        className="btn-textslider-1"
                        aria-selected="true"
                    >
                        <p className="txt-btn-textSlider">Permanente</p>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "#70AE47", borderRadius: "10px 10px 0 0", height:"100%" }}
                        className="btn-textslider-2"
                        aria-selected="true"
                    >
                        <p className="txt-btn-textSlider">Bajo</p>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "#EE7D30", borderRadius: "10px 10px 0 0", height:"100%" }}
                        className="btn-textslider-3"
                    >
                        <p className="txt-btn-textSlider">Medio</p>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "#982B52", borderRadius: "10px 10px 0 0", height:"100%" }}
                        className="btn-textslider-4"
                    >
                        <p className="txt-btn-textSlider">Alto</p>
                    </Tab>
                </TabList>



                <TabPanels h="90%" w="95%">


                    <TabPanel h="100%" w="100%" overflow="scroll">
                        <div className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster 1 - </p>
                                    <p className='txt-header-p'> Subgrupo Permanente: </p>
                                    <p className={`txt-header-percentages normal`}> 0% - 25% </p>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>



                            <div className="section-btn-pdf">

                                <button className='btn-perfil-pdf' id='btn-perfil-pdf'>
                                    <p> Generar PDF </p>
                                </button>

                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel h="100%" w="100%" overflow="scroll">
                        <div className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster 1 - </p>
                                    <p className='txt-header-p'> Subgrupo Permanente: </p>
                                    <p className={`txt-header-percentages normal`}> 0% - 25% </p>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>



                            <div className="section-btn-pdf">

                                <button className='btn-perfil-pdf' id='btn-perfil-pdf'>
                                    <p> Generar PDF </p>
                                </button>

                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel h="100%" w="100%" overflow="scroll">
                        <div className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster 1 - </p>
                                    <p className='txt-header-p'> Subgrupo Permanente: </p>
                                    <p className={`txt-header-percentages normal`}> 0% - 25% </p>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>



                            <div className="section-btn-pdf">

                                <button className='btn-perfil-pdf' id='btn-perfil-pdf'>
                                    <p> Generar PDF </p>
                                </button>

                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel h="100%" w="100%" overflow="scroll">
                        <div className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster 1 - </p>
                                    <p className='txt-header-p'> Subgrupo Permanente: </p>
                                    <p className={`txt-header-percentages normal`}> 0% - 25% </p>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                </div>
                            </div>



                            <div className="section-btn-pdf">

                                <button className='btn-perfil-pdf' id='btn-perfil-pdf'>
                                    <p> Generar PDF </p>
                                </button>

                            </div>
                        </div>
                    </TabPanel>


                </TabPanels>
            </Tabs>
        </>
    )
}

export default ProfileTextSlider;