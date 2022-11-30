import React from 'react'
import { HStack, Box } from '@chakra-ui/react'
import './BarraProbAbandono.css'

function BarraProbAbandono({ BajoEnd, MedioEnd, AltoEnd }) {
  return (

    <>
      <HStack spacing='25px' p='6' rounded='md' bg='#D3D3D3' w='100%' h='100%'>

      <Box w="100%" h="100px" bg='white' boxShadow='xl' borderRadius="10px">
          <div className='probAbandodoTitulo'>Normal</div>
          <div className='porcentageAbandojoNormal'>{0}% - {BajoEnd}%</div>
        </Box>

        <Box w="100%" h="100px" bg='white' boxShadow='xl' borderRadius="10px">
          <div className='probAbandodoTitulo'>Bajo</div>
          <div className='porcentageAbandojoBajo'>{BajoEnd}% - {MedioEnd}%</div>
        </Box>

        <Box w="100%" h="100px" bg='white' boxShadow='xl' borderRadius="10px">
          <div className='probAbandodoTitulo'>Medio</div>
          <div className='porcentageAbandojoMedio'> {MedioEnd}% - {AltoEnd}%</div>
        </Box>

        <Box w="100%" h="100px" bg='white' boxShadow='xl' borderRadius="10px">
          <div className='probAbandodoTitulo'>Alto</div>
          <div className='porcentageAbandojoAlto'>{AltoEnd}% - {100}%</div>
        </Box>

      </HStack>

    </>
  )
}
export default BarraProbAbandono

