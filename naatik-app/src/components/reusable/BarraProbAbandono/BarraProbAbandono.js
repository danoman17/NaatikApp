import React from 'react'
import { HStack, Box } from '@chakra-ui/react'
import './BarraProbAbandono.css'

function BarraProbAbandono(BajoEnd, MedioEnd) {
  return (
    
    // <Box  position="relative" h="100vh" p={6} >
<>
    <HStack spacing='25px' p='6' rounded='md' bg='#D3D3D3' w='100%' >

      <Box w="100%" h="100px" bg='white' boxShadow='xl' borderRadius="10px"> 
      <div className='probAbandodoTitulo'>Bajo</div>
      <div className='porcentageAbandojoBajo'>0% - ??%</div>
      </Box>
      
      <Box w="100%" h="100px" bg='white' boxShadow='xl' borderRadius="10px"> 
      <div className='probAbandodoTitulo'>Medio</div>
      <div className='porcentageAbandojoMedio'> ??% - ??%</div>
      </Box>

      <Box w="100%" h="100px" bg='white' boxShadow='xl' borderRadius="10px"> 
      <div className='probAbandodoTitulo'>Alto</div>
      <div className='porcentageAbandojoAlto'>??% - 100%</div>
      </Box>

    </HStack>

  {/* </Box> */}
  </>
  )
}
export default BarraProbAbandono
   
