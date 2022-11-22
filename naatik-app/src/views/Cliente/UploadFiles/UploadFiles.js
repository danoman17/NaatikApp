import React from 'react'
import { Navbar, TarjetaMaestra, DragDropFile, BotonSubir } from '../../../routeIndex.js';

import './UploadFiles.css';


const UploadFiles = () => {

  return (
    <>
        <Navbar></Navbar>
        <TarjetaMaestra>
            <DragDropFile/>
        </TarjetaMaestra>
    </>
  )
}

export default UploadFiles;