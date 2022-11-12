import React from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, SliderMultipleIndex, BarraProbAbandono, BotonSubir } from '../../../routeIndex';
import './panelVisualizacion.css'
import {Routes, Route, useNavigate} from 'react-router-dom';

const PanelVisualizacion = () => {

const navigate = useNavigate();
  
    const goToPerfiles = () => {
      navigate('/PantallaDividida');
  }
  
  return (
    <>
        <Navbar>  </Navbar>

        <TarjetaMaestra>

          <div className='contenedor-general-panel'>
              <BarraLateral></BarraLateral>

              <div className='contendor-general-tarjeta'>
                  <div className='tarjeta-maestra'>
                     <div className='container-slider'>

                      <SliderMultipleIndex> </SliderMultipleIndex>

                     </div>

                          <div className='container-barraprobabandono'> 

                                <BarraProbAbandono></BarraProbAbandono>
                     
                               </div>

                     <div className='container-btn'>

                     <BotonSubir onClick={goToPerfiles} TextBtn={'Siguiente'}/>

                     </div>

                  </div>
              </div>

          </div>

        </TarjetaMaestra>

    </>
  )
}

export default PanelVisualizacion;