import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navbar, TarjetaMaestra, BarraLateral, PieChart, CirculoPorcentaje, TextSlider, BarraNombreArchivo } from '../../../routeIndex';
import './pantallaDividida.css'

const PantallaDividida = () => {


  

  const { state } = useLocation();


  return (
    <>
      {/* Navbar section */}
      <Navbar> </Navbar>

      {/* name of the current file section */}
      <BarraNombreArchivo></BarraNombreArchivo>

      {/* general container for the spacework */}
      <TarjetaMaestra>

        {/* container for comodation purposes */}
        <div className='contenedor-general-panel'>

          {/* lateral navbar section */}
          <BarraLateral Bajo={state.slidevalues[0]} Medio={state.slidevalues[1]} Alto={state.slidevalues[2]}></BarraLateral>
          
          {/* section for general content */}
          <div className='contendor-general-tarjeta'>
            <div className='tarjeta-maestra'>
              {/* we can add components here.... */}

              {/* title/instructions */}
              <div className='contenedor-der-pantalladiv'>
                <div className='contendeor-PieChart'>
                  <div className='contenedor-PieChart-header'>
                    <p>Distribución de grupos</p>

                  </div>

                  <div className='contenedor-PieChart-chart'>
                    <PieChart></PieChart>

                  </div>
                </div>
                <div className='contenedor-porcentaje'>

                  <div className='contenedor-porcentaje-header'>
                    <p className='texto-porcentaje'> Porcentaje del dataset usado </p>
                  </div>
                  <div className='contenedor-porcentaje-graph'>
                    <CirculoPorcentaje porcentaje={20}></CirculoPorcentaje>
                  </div>

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