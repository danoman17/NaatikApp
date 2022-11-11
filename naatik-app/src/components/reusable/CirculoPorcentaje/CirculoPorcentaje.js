import React from 'react';
import'./CirculoPorcentaje.css';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'



function CirculoPorcentaje({porcentaje}) {
    return (
        <div className='contenedor-general-circular-progress'>

              <CircularProgress  value={porcentaje} color='#FE5694' size='150px'  getValueText>
                <CircularProgressLabel color='#FE5694' > {porcentaje}%</CircularProgressLabel>
              </CircularProgress>

        </div>
    );
}

export default CirculoPorcentaje;