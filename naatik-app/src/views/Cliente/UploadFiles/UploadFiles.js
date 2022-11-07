import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Navbar, TarjetaMaestra, DragDropFile, BotonSubir } from '../../../routeIndex.js';

import './UploadFiles.css';


const UploadFiles = () => {
  const navigate = useNavigate();

  const goToPanel = () => {
    navigate('/panel_visuzalizacion');
}


  return (
    <>
        <Navbar></Navbar>

        <TarjetaMaestra>
            <DragDropFile/>
            <BotonSubir onClick={goToPanel}/>
        </TarjetaMaestra>
    </>
  )
}

export default UploadFiles;