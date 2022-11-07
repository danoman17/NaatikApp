import React from 'react'
import { BotonPerfilesClusters } from '../../../routeIndex';

import './listaDesplegable.css';


const ListaDesplegable = ({arrContenido}) => {


  return (
    <>
        <div className='contenedor-listaDesplegable'>
            <div className={ `header-listaDesplegable` } >
                
                <BotonPerfilesClusters btnType={1} type={1} />
            
            </div>
    
            <div className={ "contenido-listaDesplegable show" }>
                <div className='container-listaDesplegable'>
                    
                    <BotonPerfilesClusters btnType={2} content={"Cluster 1"} />
                    <BotonPerfilesClusters btnType={2} content={"Cluster 1"} />
                    <BotonPerfilesClusters btnType={2} content={"Cluster 1"} />
                    <BotonPerfilesClusters btnType={2} content={"Cluster 1"} />

                </div>
        
            </div>
        </div>
        
    </>
  )
}

export default ListaDesplegable;