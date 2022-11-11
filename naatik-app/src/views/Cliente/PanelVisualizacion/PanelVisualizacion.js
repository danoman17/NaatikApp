import React from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, SliderMultipleIndex, PieChart, BarChart } from '../../../routeIndex';
import './panelVisualizacion.css'

const PanelVisualizacion = () => {
  return (
    <>
        <Navbar>  </Navbar>

        <TarjetaMaestra>

          <div className='contenedor-general-panel'>
              <BarraLateral></BarraLateral>

              <div className='contendor-general-tarjeta'>
                  <div className='tarjeta-maestra'>
                     <div className='container-slider'>
                     
                     </div>
                     <div className='container-barraprobabandono'> 
                     

                     </div>
                     <div className='container-btn'>

                     </div>
                  </div>
              </div>

          </div>

        </TarjetaMaestra>

    </>
  )
}

export default PanelVisualizacion;