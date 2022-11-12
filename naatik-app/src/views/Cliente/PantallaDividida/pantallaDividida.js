import React from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, PieChart, CirculoPorcentaje,  TextSlider} from '../../../routeIndex';
import './pantallaDividida.css'

const PantallaDividida = () => {
  return (
    <>
        <Navbar>  </Navbar>

        <TarjetaMaestra>

          <div className='contenedor-general-panel'>
              <BarraLateral></BarraLateral>

              <div className='contendor-general-tarjeta'>
                  <div className='tarjeta-maestra'>


                     <div className='contenedor-der-pantalladiv'>
                        <div className='contendeor-PieChart'>
                          <PieChart></PieChart>
                        </div>
                        <div className='contenedor-porcentaje'>
                          <CirculoPorcentaje porcentaje={20}></CirculoPorcentaje>
                          <p className='texto-porcentaje'> Porcentaje Usado </p>

                        </div>
                        
                     </div>
                     <div className='contenedor-izq-pantalladiv'> 

                     <TextSlider></TextSlider>

                     </div>
                     
                  </div>
              </div>

          </div>

        </TarjetaMaestra>
    </>
  )
}

export default PantallaDividida