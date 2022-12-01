import React from 'react'
import './ShowAmount.css'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
  } from '@chakra-ui/react'

  

const ShowAmount = ({Label, Amount}) => {
  return (

        <Stat maxW='sm' boxShadow='md' p='6' rounded='md' bg='white' overflow='hidden'>
          <StatLabel fontSize="1.5rem" borderBottom="10px">{Label}</StatLabel>
          <StatNumber>${Amount}</StatNumber>
          <StatHelpText><StatArrow type='increase' /> 
            Si el resultado es 0.00, quiere decir que no se encontró relacion con el dataset actual.
          </StatHelpText>
        </Stat>


  )
}

export default ShowAmount