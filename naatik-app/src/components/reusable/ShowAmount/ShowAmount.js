import React from 'react'
import './ShowAmount.css'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow, Box
  } from '@chakra-ui/react'

  

const ShowAmount = () => {
  return (

    <Box  position="relative" h="100vh" p={12} >

        <Stat maxW='sm' boxShadow='dark-lg' p='6' rounded='md' bg='white' overflow='hidden'>
          <StatLabel>Bill Amount</StatLabel>
          <StatNumber>£99999.99</StatNumber>
          <StatHelpText><StatArrow type='increase' />Sumatoria del Subgrupo/Perfil</StatHelpText>
        </Stat>

        </Box>

  )
}

export default ShowAmount