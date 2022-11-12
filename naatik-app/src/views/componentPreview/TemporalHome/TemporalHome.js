import React from 'react'
import {Link} from 'react-router-dom'
import './TemporalHome.css'


export const TemporalHome = () => {
  return (
    <>

      <h1>Componentes Iniciales</h1>
      <Link to='/home' className='link_tmp'>Home</Link>
      <Link to='/template' className='link_tmp'>template</Link>
      <Link to='/CirculoPorcentaje' className='link_tmp'>CirculoPorcentaje</Link>
      <Link to='/BarraProbAbandono' className='link_tmp'>BarraProbAbandono</Link>
      <Link to='/ShowAmount' className='link_tmp'>ShowAmount</Link>
      <Link to='/TextSlider' className='link_tmp'>TextSlider</Link>
      <Link to='/PantallaDividida' className='link_tmp'>PantallaDividida</Link>
      <Link to='/PantallaPerfil' className='link_tmp'>PantallaPerfil</Link>

      
      
      
    </>
  )
}

export default TemporalHome;

