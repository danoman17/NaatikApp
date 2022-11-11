import React from 'react'
import TarjetaMaestra from '../../components/reusable/TarjetaMaestra/TarjetaMaestra';
import { Navbar } from '../../routeIndex';


export const Template = ({content}) => {
  return (
    <>
        <Navbar>  

        </Navbar>
        <TarjetaMaestra children={content}>
        </TarjetaMaestra>
    </>
  )
}

export default Template;

