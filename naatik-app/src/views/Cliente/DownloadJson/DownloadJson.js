import React from 'react'
import {DragDropFile} from '../../../routeIndex';
import './DownloadJson.css';

const DownloadJson = () => {

    const handleClick = (e) => {
        e.preventDefault();



    }
    
  return (
    <>
    <div className='contenedor-general-btn-generate-json'>
        <DragDropFile active={false}></DragDropFile>
      
    </div>
    </>
  )
}

export default DownloadJson;