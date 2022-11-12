import React from 'react'
import './ShowAmount.css'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow, Box
  } from '@chakra-ui/react'

  

const ShowAmount = ({Label, Amount}) => {
  return (

        <Stat maxW='sm' boxShadow='dark-lg' p='6' rounded='md' bg='white' overflow='hidden'>
          <StatLabel>{Label}</StatLabel>
          <StatNumber>${Amount}</StatNumber>
          <StatHelpText><StatArrow type='increase' />Sumatoria del Subgrupo/Perfil</StatHelpText>
        </Stat>


  )
}

export default ShowAmount