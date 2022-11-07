import React from 'react'
import {Link} from 'react-router-dom'
import './TemporalHome.css'


export const TemporalHome = () => {
  return (
    <>

      <h1>Componentes Iniciales</h1>
      <Link to='/home' className='link_tmp'>Home</Link>
      <Link to='/template' className='link_tmp'>template</Link>

    </>
  )
}

export default TemporalHome;

