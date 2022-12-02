import React, { useEffect, useState } from "react";
import { BotonSubir } from '../../../routeIndex';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import './ProfileTextSlider.css'
import {
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";

const savePDF = (idDiv, pdfTitle) => {
    const input = document.querySelector(idDiv);
    const divHeight = input.clientHeight
    const divWidth = input.clientWidth
    const ratio = divHeight / divWidth;
  
    html2canvas(input, { scale: '1' }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdfDOC = new jsPDF("p", "pt", 'a4'); //  use a4 for smaller page
  
      var width = pdfDOC.internal.pageSize.getWidth();
      let height = pdfDOC.internal.pageSize.getHeight();
      height = (ratio * width);

  
      pdfDOC.addImage(imgData, 'JPEG', 0, 0, width + 30, height + 350);
      pdfDOC.save(pdfTitle + '.pdf');   //Download the rendered PDF.
    });
  }

const ProfileTextSlider = ({ clusterNames, porcentajes, clusterNo  }) => {

    // console.log(clusterNames);
    // console.log(porcentajes);
    // console.log(clusterNo);

    const [imageAll, setImageAll] = useState();
    const [imagePermanent, setImagePermanent] = useState();
    const [imageBajo, setImageBajo] = useState(); 
    const [imageMedio, setImageMedio] = useState(); 
    const [imageAlto, setImageAlto] = useState();     

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

    const handleImagesProfileLow = async(cluster) => {
        try {
            const response = await fetch("http://localhost:8080/image/cluster/Cluster_"+cluster+"/low");
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImageBajo(imageObjectURL);
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleImagesProfileMid = async(cluster) => {
        try {
            const response = await fetch("http://localhost:8080/image/cluster/Cluster_"+cluster+"/mid");
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImageMedio(imageObjectURL);
        } catch (error) {
            console.log("error", error);
        }
    }

    const handleImagesProfileHigh = async(cluster) => {
        try {
            const response = await fetch("http://localhost:8080/image/cluster/Cluster_"+cluster+"/high");
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImageAlto(imageObjectURL);
        } catch (error) {
            console.log("error", error);
        }
    }



    useEffect(() => {
        handleImagesProfileAll(clusterNo);
        handleImagesProfilePerma(clusterNo);
        handleImagesProfileLow(clusterNo);
        handleImagesProfileMid(clusterNo);
        handleImagesProfileHigh(clusterNo);
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
                        <div id="perma" className="contenedor-general-resumen-profile">
                            
                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster {clusterNo+1} -</p>
                                    <p className='txt-header-p'>- Subgrupo Permanente: </p>
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


                                <button className='btn-perfil-pdf' id='btn-perfil-pdf' onClick={() => savePDF('#perma', `Cluster${clusterNo+1}_Permanente`)}>
                                    <p> Generar PDF </p>
                                </button>

                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel h="100%" w="100%" overflow="scroll" border="2px solid #70AE47">
                        <div id="bajo" className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster {clusterNo+1} -</p>
                                    <p className='txt-header-p'>- Subgrupo Bajo: </p>
                                    <p className={`txt-header-percentages bajo`}> {porcentajes[0] * 100}% - {porcentajes[1] * 100}% </p>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>
                                <img src={imageAll} alt="imgall"></img>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>
                                <img src={imageBajo} alt="imgbajo"></img>
                                </div>
                            </div>



                            <div className="section-btn-pdf">

                                <button className='btn-perfil-pdf' id='btn-perfil-pdf' onClick={() => savePDF('#bajo', `Cluster${clusterNo+1}_Bajo`)}>
                                    <p> Generar PDF </p>
                                </button>

                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel h="100%" w="100%" overflow="scroll" border="2px solid #EE7D30">
                        <div id='medio' className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster {clusterNo+1} - </p>
                                    <p className='txt-header-p'> Subgrupo Medio: </p>
                                    <p className={`txt-header-percentages medio`}> {porcentajes[1] * 100}% - {porcentajes[2] * 100}% </p>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>

                                <img src={imageAll} alt="imgall"></img>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>
                                <img src={imageMedio} alt="imgMedio"></img>

                                </div>
                            </div>



                            <div className="section-btn-pdf">

                                <button className='btn-perfil-pdf' id='btn-perfil-pdf' onClick={() => savePDF('#medio', `Cluster${clusterNo+1}_Medio`)}>
                                    <p> Generar PDF </p>
                                </button>

                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel h="100%" w="100%" overflow="scroll" border="2px solid #982B52">
                        <div id="alto" className="contenedor-general-resumen-profile">

                            <div className='contenedor-texto-header'>
                                <div className='txt-header'>
                                    <p className="txt-header-p">Cluster {clusterNo+1} - </p>
                                    <p className='txt-header-p'> Subgrupo Alto: </p>
                                    <p className={`txt-header-percentages alto`}> {porcentajes[2] * 100}% - {100}% </p>
                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>
                                <img src={imageAll} alt="imgall"></img>

                                </div>
                            </div>

                            <div className='contenedor-general-img'>

                                <div className='image-container'>
                                <img src={imageAlto} alt="imgAlto"></img>

                                </div>
                            </div>




                            <div className="section-btn-pdf">

                                <button className='btn-perfil-pdf' id='btn-perfil-pdf' onClick={() => savePDF('#alto', `Cluster${clusterNo+1}_Alto`)}>
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