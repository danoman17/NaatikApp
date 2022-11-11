import React from 'react';

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'



function CirculoPorcentaje({porcentaje}) {
    return (
        <div style={{ width: 200, height: 200 }}>

              <CircularProgress  value={porcentaje} color='#FE5694' size='120px'  getValueText>
                <CircularProgressLabel color='#FE5694' > {porcentaje}%</CircularProgressLabel>
              </CircularProgress>

        </div>
    );
}

export default CirculoPorcentaje;