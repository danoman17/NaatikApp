import React from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, PieChart, CirculoPorcentaje,  TextSlider} from '../../../routeIndex';


const PantallaDividida = () => {
  return (
    <>
        <Navbar>  </Navbar>

        <TarjetaMaestra>

          <div className='contenedor-general-panel'>
              <BarraLateral></BarraLateral>

              <div className='contendor-general-tarjeta'>
                  <div className='tarjeta-maestra'>
                     <div className='container-Pie'>
                        <PieChart></PieChart>
                     
                     </div>
                     <div className='container-TextSlider'> 

                     <TextSlider></TextSlider>

                     </div>
                     <div className='container-CirculoPorcentaje'>
                        <CirculoPorcentaje porcentaje={50}></CirculoPorcentaje>

                     </div>
                  </div>
              </div>

          </div>

        </TarjetaMaestra>
    </>
  )
}

export default PantallaDividida