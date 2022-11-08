import React from 'react'
import { Navbar, TarjetaMaestra, BarraLateral } from '../../../routeIndex';
import './panelVisualizacion.css'


const PanelVisualizacion = () => {
  return (
    <>
        <Navbar>  </Navbar>

        <TarjetaMaestra>

          <div className='contenedor-general-panel'>
              {/* <ListaDesplegable></ListaDesplegable> */}
              {/* <BoxChurns></BoxChurns> */}
              <BarraLateral></BarraLateral>

              <div className='contendor-general-tarjeta'>
                  <div className='tarjeta-maestra'>
                      <h1>content</h1>
                  </div>
              </div>

          </div>

        </TarjetaMaestra>
    </>
  )
}

export default PanelVisualizacion;