import React from 'react'
import { BotonPerfilesClusters } from '../../../routeIndex';

import './listaDesplegable.css';


const ListaDesplegable = ({arrContenido, funcion}) => {


  return (
    <>
        <div className='contenedor-listaDesplegable'>
            <div className={ `header-listaDesplegable` } >
                
                <BotonPerfilesClusters btnType={1} type={1} />
            
            </div>
    
            <div className={ "contenido-listaDesplegable show" }>
                <div className='container-listaDesplegable'>

                    {
                        arrContenido.map((btn,key) => {
                            return(
                                <BotonPerfilesClusters btnType={2} type={2} idBtn={key} content={btn.name} evento={funcion} key={key} />
                            )
                        })
                    }

                </div>
        
            </div>
        </div>
        
    </>
  )
}

export default ListaDesplegable;