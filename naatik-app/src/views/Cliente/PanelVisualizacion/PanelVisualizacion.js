import React, { useState } from 'react'

import { Navbar, TarjetaMaestra, BarraLateral, SliderMultipleIndex, BarraProbAbandono, BotonSubir, BarraNombreArchivo } from '../../../routeIndex';

import './panelVisualizacion.css'
import { useNavigate } from 'react-router-dom';

const PanelVisualizacion = () => {

  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState([25, 50, 80]);

  const handleSetParams = () => {
    fetch('http://localhost:8080/set_churn_segment/' + sliderValue[0] + '/' + sliderValue[1] + '/' + sliderValue[2])
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/PantallaDividida',
        {
          state: {
            slidevalues: sliderValue
          }
        });
      });
  };

  return (
    <>
      {/* Navbar section */}
      <Navbar>  </Navbar>

      {/* name of the current file section */}
      <BarraNombreArchivo></BarraNombreArchivo>

      {/* general container for the spacework */}
      <TarjetaMaestra>

        {/* container for comodation purposes */}
        <div className='contenedor-general-panel'>

          {/* lateral navbar section */}
          <BarraLateral Bajo={sliderValue[0]} Medio={sliderValue[1]} Alto={sliderValue[2]} ></BarraLateral>

          {/* section for general content */}
          <div className='contendor-general-tarjeta'>
            <div className='tarjeta-maestra'>
              {/* we can add components here.... */}
              
              {/* title/instructions */}
              <div className='container-title-instructions'>
                <h1 className='instructions-frame3'>Deslice los puntos para configurar porcentajes de churn</h1>
              </div>

              {/* multipleIndexSlider */}
              <div className='container-slider'>
                <SliderMultipleIndex values={sliderValue} setValues={setSliderValue}></SliderMultipleIndex>
              </div>
              {/* barra de probabilidad de abandono section */}
              <div className='container-barraprobabandono'>
                <BarraProbAbandono BajoEnd={sliderValue[0]} MedioEnd={sliderValue[1]} AltoEnd={sliderValue[2]} ></BarraProbAbandono>
              </div>
              {/* button */}
              <div className='container-btn'>
                <BotonSubir onClick={handleSetParams} TextBtn={'Siguiente'} />
              </div>

            </div>
          </div>

        </div>

      </TarjetaMaestra>

    </>
  )
}

export default PanelVisualizacion;