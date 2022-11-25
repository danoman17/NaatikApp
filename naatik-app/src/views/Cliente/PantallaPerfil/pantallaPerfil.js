import React, { useState } from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, ShowAmount, ResultadosTabla, BarChart, BotonSubir, BarraNombreArchivo } from '../../../routeIndex';
import { useLocation } from 'react-router-dom';
import './pantallaPerfil.css'

const PantallaPerfil = () => {
  
  const [clusterId, setClusterId] = useState(0);

  
  const { state } = useLocation();
  

  
  return (
    <>

      {/* Navbar section */}
      <Navbar>  </Navbar>

      {/* name of the current file section */}
      <BarraNombreArchivo></BarraNombreArchivo>

      {/* general container for the spacework */}
      <TarjetaMaestra>

        {/* general container for the spacework */}
        <div className='contenedor-general-panel'>

          {/* lateral navbar section */}
          <BarraLateral
            Bajo={state.churns[0]}
            Medio={state.churns[1]}
            Alto={state.churns[2]}
            arrayInfo={state.clusterInfo}
            clickBtn={setClusterId}

          >

          </BarraLateral>

          {/* section for general content */}
          <div className='contendor-general-tarjeta'>
            <div className='tarjeta-maestra'>

              {/* we can add components here.... */}



              <div className='contenedor-texto-header'>
                <div className='txt-header'>
                  <p className='txt-header-p'> Subgrupo con probabilidad baja: </p>
                  <p className='txt-header-green'> ?% - ?% </p>
                </div>
              </div>

              <div className='contenedor-BillAmount-HyM'>
                <div className='encabezado-contenedor-BillAmount-HyM'>
                  <p>
                    Bill Amount
                  </p>
                </div>
                <div className='contenido-contenedor-BillAmount-HyM'> 
                  <ShowAmount Label={'Total de Factura'} Amount={'123000'}>
                  </ShowAmount> 
                </div>
              </div>



              <div className='contenedor-TableLines'>

                <ResultadosTabla>

                </ResultadosTabla>
              </div>



              <div className='contenedor-GananciaLinea'>
                <div className='encabezado-contenedor-GananciaLinea'>
                  <p>
                    Ganancia de la línea
                  </p>
                </div>
                <div className='contenido-contenedor-GananciaLinea'>
                  <ShowAmount Label={'Ganancias de Linea'} Amount={'199999'}></ShowAmount>
                </div>

              </div>

              <div className='Contenedor-boton'>

                <BotonSubir TextBtn={'Generar PDF'}></BotonSubir>

              </div>



            </div>
          </div>
        </div>
      </TarjetaMaestra>
    </>
  )
}

export default PantallaPerfil;

