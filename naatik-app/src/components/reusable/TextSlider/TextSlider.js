import React, { useEffect, useState } from 'react'
import {ShowAmount} from '../../../routeIndex';
import './TextSlider.css'
import { Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const TextSlider = ({info, infoLateralBar}) => {
 
  const navigate = useNavigate();
  const data = [];

  
  const goToPerfil = () => {
    navigate('/PantallaPerfil',
    {
      state: {
        clusterInfo: infoLateralBar[0],
        churns: infoLateralBar[1],
      }
    });
  };


  

  // creamos el metodo que calcula los porcentajes de la PieChart.

  const calculatePercentages = () => {
    info.map((cluster)=> {
      data.push(cluster["bill amount"]);
    });
  };

  calculatePercentages();




  return (


      <Tabs variant='unstyled' boxShadow='2xl' p='3' rounded='md' bg='white' w='80%' h='80%' overflow='scroll'>

        <TabList h='15%' w='100%' display='flex' justifyContent='space-around' alignItems='center' padding='10px'>
          <Tab _selected={{ color: 'white', bg: '#E34956', borderRadius:'50px' }} className='btn-textslider-1' aria-selected='true'> <p className='txt-btn-textSlider'>Normal</p> </Tab>
          <Tab _selected={{ color: 'white', bg: '#70AE47', borderRadius:'50px' }} className='btn-textslider-2' aria-selected='true'> <p className='txt-btn-textSlider'>Bajo</p> </Tab>
          <Tab _selected={{ color: 'white', bg: '#EE7D30', borderRadius:'50px' }} className='btn-textslider-3'><p className='txt-btn-textSlider'>Medio</p></Tab>
          <Tab _selected={{ color: 'white', bg: '#982B52', borderRadius:'50px' }} className='btn-textslider-4'><p className='txt-btn-textSlider'>Alto</p></Tab>
        </TabList>

            <TabPanels h='85%' w='100%'>
                  <TabPanel h='100%' w='100%'>
                    <div className='contenedor-general-resumen'>
                      <div className='parte-arriba'>
                        {/* <ShowAmount Label={'Total de Factura'} Amount={data[0].toFixed(2)}></ShowAmount> */}
                      </div>
                      <div className='parte-abajo'>
                        <Button colorScheme='green' onClick={goToPerfil} >Ver más</Button>
                      </div>
                    </div>
                    
                  </TabPanel>

                  <TabPanel h='100%' w='100%'>
                    <div className='contenedor-general-resumen'>
                      <div className='parte-arriba'>
                        {/* <ShowAmount Label={'Total de Factura'} Amount={data[1].toFixed(2)}></ShowAmount> */}
                      </div>
                      <div className='parte-abajo'>
                        <Button colorScheme='green' onClick={goToPerfil} >Ver más</Button>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel h='100%' w='100%'>
                    <div className='contenedor-general-resumen'>
                      <div className='parte-arriba'>
                        {/* <ShowAmount Label={'Total de Factura'} Amount={data[2].toFixed(2)}></ShowAmount> */}
                      </div>
                      <div className='parte-abajo'>
                        <Button colorScheme='green' onClick={goToPerfil}>Ver más</Button>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel h='100%' w='100%'>
                    <div className='contenedor-general-resumen'>
                      <div className='parte-arriba'>
                        {/* <ShowAmount Label={'Total de Factura'} Amount={data[3].toFixed(2)}></ShowAmount> */}
                      </div>
                      <div className='parte-abajo'>
                        <Button colorScheme='green' onClick={goToPerfil}>Ver más</Button>
                      </div>
                    </div>
                  </TabPanel>
                  
            </TabPanels>
      </Tabs>
  )
}

export default TextSlider