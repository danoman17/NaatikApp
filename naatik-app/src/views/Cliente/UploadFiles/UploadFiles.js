import React from 'react'
import { Navbar, TarjetaMaestra, DragDropFile } from '../../../routeIndex.js';

import './UploadFiles.css';


const UploadFiles = () => {

  return (
    <>
      <Navbar></Navbar>
      <TarjetaMaestra>
        <DragDropFile />
      </TarjetaMaestra>
    </>
  )
}

export default UploadFiles;