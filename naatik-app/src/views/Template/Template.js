
import TarjetaMaestra from '../../components/reusable/TarjetaMaestra/TarjetaMaestra';
import { Navbar } from '../../routeIndex';
import React from 'react';



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

