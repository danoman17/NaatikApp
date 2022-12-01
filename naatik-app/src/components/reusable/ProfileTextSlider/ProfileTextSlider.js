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


const ProfileTextSlider = ({ clusterNames, porcentajes, clusterNo  }) => {

    // console.log(clusterNames);
    // console.log(porcentajes);
    // console.log(clusterNo);

    const [imageAll, setImageAll] = useState();
    const [imagePermanent, setImagePermanent] = useState();    

    const handleImagesProfileAll = async(cluster) => {
        try {
            const response = await fetch("http://localhost:8080/image/cluster/Cluster_"+cluster+"/all");
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImageAll(imageObjectURL)
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleImagesProfilePerma = async(cluster) => {
        try {
            const response = await fetch("http://localhost:8080/image/cluster/Cluster_"+cluster+"/permanent");
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImagePermanent(imageObjectURL);
        } catch (error) {
            console.log("error", error);
        }
    }



    useEffect(() => {
        handleImagesProfileAll(clusterNo);
        handleImagesProfilePerma(clusterNo);
    }, [])


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
                        className="btn-textslider-1-2"
                        aria-selected="true"
                    >
                        <p className="txt-btn-textSlider">Permanente</p>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "#70AE47", borderRadius: "10px 10px 0 0", height:"100%" }}
                        className="btn-textslider-2-2"
                        aria-selected="true"
                    >
                        <p className="txt-btn-textSlider">Bajo</p>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "#EE7D30", borderRadius: "10px 10px 0 0", height:"100%" }}
                        className="btn-textslider-3-2"
                    >
                        <p className="txt-btn-textSlider">Medio</p>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "#982B52", borderRadius: "10px 10px 0 0", height:"100%" }}
                        className="btn-textslider-4-2"
                    >
                        <p className="txt-btn-textSlider">Alto</p>
                    </Tab>
                </TabList>



                <TabPanels h="90%" w="95%">


                    <TabPanel h="100%" w="100%" overflow="scroll" border="2px solid #E34956">
                        <div className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster_{clusterNo+1} - </p>
                                    <p className='txt-header-p'> Subgrupo Permanente: </p>
                                    <p className={`txt-header-percentages normal`}> 0% - {porcentajes[0] * 100}% </p>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>
                                    <img src={imageAll} alt="imgall"></img>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                    <img src={imagePermanent} alt="imgall"></img>

                                </div>
                            </div>

                            <div className="section-btn-pdf">

                                <button className='btn-perfil-pdf' id='btn-perfil-pdf'>
                                    <p> Generar PDF </p>
                                </button>

                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel h="100%" w="100%" overflow="scroll" border="2px solid #70AE47">
                        <div className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster {clusterNo+1} - </p>
                                    <p className='txt-header-p'> Subgrupo Bajo: </p>
                                    <p className={`txt-header-percentages bajo`}> {porcentajes[0] * 100}% - {porcentajes[1] * 100}% </p>
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

                    <TabPanel h="100%" w="100%" overflow="scroll" border="2px solid #EE7D30">
                        <div className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster {clusterNo+1} - </p>
                                    <p className='txt-header-p'> Subgrupo Medio: </p>
                                    <p className={`txt-header-percentages medio`}> {porcentajes[1] * 100}% - {porcentajes[2] * 100}% </p>
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

                    <TabPanel h="100%" w="100%" overflow="scroll" border="2px solid #982B52">
                        <div className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster {clusterNo+1} - </p>
                                    <p className='txt-header-p'> Subgrupo Alto: </p>
                                    <p className={`txt-header-percentages alto`}> {porcentajes[2] * 100}% - {100}% </p>
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