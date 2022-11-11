import React from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, ResultadosTabla } from '../../../routeIndex';
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
                    <ResultadosTabla></ResultadosTabla>
                  </div>
              </div>

          </div>

        </TarjetaMaestra>
    </>
  )
}

export default PanelVisualizacion;