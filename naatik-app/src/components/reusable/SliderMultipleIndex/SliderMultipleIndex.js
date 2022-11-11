import React, { useState, MdGraphicEq } from 'react'
import './SliderMultipleIndex.css'
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb, RangeSliderMark, Box
  } from '@chakra-ui/react'


const SliderMultipleIndex = () => {
    const [sliderValue, setSliderValue] = useState([25, 50, 80])

  return (
    <>
<RangeSlider aria-label={['min', 'max']} defaultValue={[25,50, 80]} onChange={(val) => setSliderValue(val)}>
      <RangeSliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
        25%
      </RangeSliderMark>
      <RangeSliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
        50%
      </RangeSliderMark>
      <RangeSliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
        75%
      </RangeSliderMark>

      <RangeSliderMark
        value={sliderValue[0]}
        textAlign='center'
        bg='blue.500'
        color='white'
        mt='-10'
        ml='-5'
        w='12'
      >
        {sliderValue[0]}%
      </RangeSliderMark>

      <RangeSliderMark
        value={sliderValue[1]}
        textAlign='center'
        bg='blue.500'
        color='white'
        mt='-10'
        ml='-5'
        w='12'
      >
        {sliderValue[1]}%
        </RangeSliderMark>
        
        <RangeSliderMark
        value={sliderValue[2]}
        textAlign='center'
        bg='blue.500'
        color='white'
        mt='-10'
        ml='-5'
        w='12'
      >
        {sliderValue[2]}%
        
      </RangeSliderMark>
      <RangeSliderTrack bg='red.100'>
        <RangeSliderFilledTrack bg='tomato' />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0}>
        <Box color='tomato' as={MdGraphicEq} />
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={6} index={1}>
        <Box color='tomato' as={MdGraphicEq} />
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={6} index={2}>
        <Box color='tomato' as={MdGraphicEq} />
      </RangeSliderThumb>
    </RangeSlider>
    </>
  )
}

export default SliderMultipleIndex;