import React from 'react'
import { Navbar, TarjetaMaestra, ListaDesplegable } from '../../../routeIndex';
import './panelVisualizacion.css'


const PanelVisualizacion = () => {
  return (
    <>
        <Navbar>  </Navbar>

        <TarjetaMaestra>

          <div className='contenedor-general-panel'>
              <ListaDesplegable></ListaDesplegable>
          </div>

        </TarjetaMaestra>
    </>
  )
}

export default PanelVisualizacion;