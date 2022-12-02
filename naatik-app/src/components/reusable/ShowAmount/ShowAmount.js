import React from 'react'
import './ShowAmount.css'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
  } from '@chakra-ui/react'

  

const ShowAmount = ({Label, Amount, descripcion=""}) => {
  return (

        <Stat maxW='100%' minH='100px' boxShadow='md' p='6' rounded='md' bg='white' overflow='hidden' borderBottom='40px'>
          <StatLabel fontSize="1.5rem" borderBottom="10px">{Label}</StatLabel>
          <StatNumber>{Amount}</StatNumber>
          <StatHelpText><StatArrow type='increase' /> 
            {descripcion}
          </StatHelpText>
        </Stat>


  )
}

export default ShowAmount