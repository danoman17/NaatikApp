import React from 'react';
import'./CirculoPorcentaje.css';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'



function CirculoPorcentaje({porcentaje}) {
    return (
        <div className='contenedor-general-circular-progress'>

              <CircularProgress  value={(porcentaje*100).toFixed(2)} color='#FE5694' size='120px'  getValueText>
                <CircularProgressLabel color='#FE5694' id='label-circularProgress'> {porcentaje}%</CircularProgressLabel>
              </CircularProgress>

        </div>
    );
}

export default CirculoPorcentaje;