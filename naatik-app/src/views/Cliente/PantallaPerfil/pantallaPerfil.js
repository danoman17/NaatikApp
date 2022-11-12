import React from 'react'
import './pantallaPerfil.css'
import { Navbar, TarjetaMaestra, BarraLateral, ShowAmount, ResultadosTabla, BarChart} from '../../../routeIndex';

const pantallaPerfil = () => {
  return (
    <div className='GrupoPantallaPerfiles'>

<>
        <Navbar>  </Navbar>

        <TarjetaMaestra>
          <div className='contenedor-general-panel'>
            
              <BarraLateral></BarraLateral>

              <div className='contendor-PerfilInfo'>
              <div className='txt-header'>
                <p className='txt-header-p'> Subgrupo con probabilidad baja: </p>
                <p className='txt-header-green'> ?% - ?% </p>

              </div>

              <div className='contenedor-BillAmount-HyM'>
                
                <div> <ShowAmount Label={'Total de Factura'} Amount={'123000'}></ShowAmount> </div>

                <div> <BarChart></BarChart> </div>


              </div>

              <div className='contenedor-TableLines'>

                <ResultadosTabla></ResultadosTabla>

              </div>

              <div className='contenedor-GananciaLinea'>

              <ShowAmount Label={'Ganancias de Linea'}  Amount={'199999'}></ShowAmount>

              </div>
      
                  </div>
              </div>


        </TarjetaMaestra>
    </>


    </div>
  )
}

export default pantallaPerfil

