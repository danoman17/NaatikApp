import React, { useState, MdGraphicEq } from 'react'
import './SliderMultipleIndex.css'
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb, RangeSliderMark, Box
  } from '@chakra-ui/react'


const SliderMultipleIndex = ({ values, setValues }) => {
    // const [sliderValue, setSliderValue] = useState([25, 50, 80]);

  return (
    <>
    
<RangeSlider  aria-label={['min', 'max']} defaultValue={[values[0],values[1], values[2]]} onChange={(val) => setValues(val)}>
      <RangeSliderMark value={0} mt='5' ml='-2.5' fontSize='sm' fontFamily='Montserrat' fontWeight='bold'>
        0%
      </RangeSliderMark>
      <RangeSliderMark value={25} mt='5' ml='-2.5' fontSize='sm' fontFamily='Montserrat' fontWeight='bold'>
        25%
      </RangeSliderMark>
      <RangeSliderMark value={50} mt='5' ml='-2.5' fontSize='sm' fontFamily='Montserrat' fontWeight='bold'>
        50%
      </RangeSliderMark>
      <RangeSliderMark value={75} mt='5' ml='-2.5' fontSize='sm' fontFamily='Montserrat' fontWeight='bold'>
        75%
      </RangeSliderMark>
      <RangeSliderMark value={100} mt='5' ml='-3.5' fontSize='sm' fontFamily='Montserrat' fontWeight='bold'>
        100%
      </RangeSliderMark>

      <RangeSliderMark
        value={values[0]}
        textAlign='center'
        bg='#2596be'
        color='white'
        mt='-10'
        ml='-5'
        w='12' fontFamily='Montserrat'
      >
        {values[0]}%
      </RangeSliderMark>

      <RangeSliderMark
        value={values[1]}
        textAlign='center'
        bg='#2596be'
        color='white'
        mt='-10'
        ml='-5'
        w='12' fontFamily='Montserrat'
      >
        {values[1]}%
        </RangeSliderMark>
        
        <RangeSliderMark
        value={values[2]}
        textAlign='center'
        bg='#2596be'
        color='white'
        mt='-10'
        ml='-5'
        w='12' fontFamily='Montserrat'
      >
        {values[2]}%
        
      </RangeSliderMark>
      <RangeSliderTrack bg='gray.00' >
        <RangeSliderFilledTrack bg='#2ECC71'  />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={8} index={0}>
        <Box color='tomato' as={MdGraphicEq} />
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={8} index={1}>
        <Box color='tomato' as={MdGraphicEq} />
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={8} index={2}>
        <Box color='tomato' as={MdGraphicEq} />
      </RangeSliderThumb>
    </RangeSlider>
    
    </>
  )
}

export default SliderMultipleIndex;