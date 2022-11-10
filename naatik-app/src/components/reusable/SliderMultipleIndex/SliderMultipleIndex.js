import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import './SliderMultipleIndex.css'

const SliderMultipleIndex = () => {

    const minDistance = 2;

    const [value1, setValue1] = useState([10, 50, 90]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {

          setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1], value1[2]]);
        } else if(activeThumb === 1) {

            if( newValue[1] < value1[1] ){

                setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance), value1[2]]);

            } else {

                setValue1([value1[0],Math.min(newValue[1], value1[2] - minDistance), value1[2]]);
            }
            
        } else {

            setValue1([value1[0], value1[1], Math.max(newValue[2], value1[1] + minDistance)]);

        }
    };
      
    const marks = [
    {
        value: 0,
        label: '0%',
    },
    {
        value: 25,
        label: '25%',
    },
    {
        value: 50,
        label: '50%',
    },
    {
        value: 75,
        label: '75%',
    },
    {
        value: 100,
        label: '100%'
    }
    ];
    
    function valuetext(value) {
    return(`${value}°C`);
    }
      

  return (
    <>
        <Box sx={{ width: "80%", height: "30%" }}>
            <Typography 
                id="text-box" 
                gutterBottom
            >

                Desliza los puntos para configurar porcentajes de churn

            </Typography>
            <Slider
                track={false}
                aria-labelledby="track-false-range-slider"
                valueLabelDisplay='on'
                getAriaValueText={valuetext}
                value={value1}
                marks={marks}
                disableSwap
                onChange={handleChange1}
                sx={{
                    color: 'success.main',
                    '& .MuiSlider-rail': {
                        height: '10px',
                        background: '#D9D9D9',
                        opacity: '1',
                    },
                    '& .MuiSlider-thumb:nth-of-type(1)': {
                        background: '#ffff',
                    },
                }}
            />
        </Box> 
    </>
  )
}

export default SliderMultipleIndex;